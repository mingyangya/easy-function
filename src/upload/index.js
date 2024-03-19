//这个是核心上传方法，不依赖任何第三
export function upload(url, fileEle, { accept, complete, success, error } = {}, previewEle, wrapEle, zoom = 1) {

  let file = fileEle.files[0],
    type = file.type,
    parentEle = wrapEle || fileEle.parentElement;

  if (/^image\/*/.test(type)) { //确保是图片
    var fileReader = new FileReader();
    //将用户上传的文件对象作为参数，传入文件读取器的方法readAsDataURL
    fileReader.readAsDataURL(file);
    //文件读取器方法执行完毕后调用函数
    fileReader.onload = function () {
      let img;
      img = new Image();
      //文件读取器的result属性即fileReader.result，就是上传文件的dataURL
      img.src = fileReader.result;

      fileEle.setAttribute('title', file.name);

      var imgEle = {};
      img.onload = () => {
        imgEle = {
          ele: previewEle,
          width: img.width,
          height: img.height,
          ratio: (parseFloat(img.width) / img.height) || 0
        };
        //自适应图片
        _reSizeEle(imgEle, parentEle, zoom);
      };
      img.onerror = function () {
        imgEle = { width: 0, height: 0, ratio: 0, ele: null };
      };
    };
    /**
     * 元素自适应
     * @ param {imgEle} object类型 要适配的img元素的信息
     * @ wrap {element}  element(nodeList)类型 要适配的img元素的父元素 ,默认 body
     * @ zoom {number} zoom 元素的缩放比 ，默认0.9
     * */
    var _reSizeEle = function (imgEle, wrap, zoom) {
      var
        eleSize = imgEle,
        img = imgEle.ele,
        wrapSize,
        _wrap = wrap || document.getElementsByTagName('body'),
        _zoom = zoom || 0.9,
        pos = window.getComputedStyle(wrap).getPropertyValue('position');
      isAutoSize = true;

      if (!img) {
        isAutoSize = false;
      }

      if (!wrap) {
        isAutoSize = false;
      }
      if (isAutoSize) {
        ((pos === "static") || (pos === "relative")) ? (_wrap.style.position = "relative") : null;
        if (img && img.style) {
          img.style.position = "absolute";
          img.style.top = "0";
          img.style.right = "0";
          img.style.bottom = "0";
          img.style.left = "0";
          img.style.margin = "auto";
        }
        wrapSize = {
          width: wrap.clientWidth,
          height: wrap.clientHeight,
          ratio: (parseFloat(wrap.clientWidth) / wrap.clientHeight) || 0
        };
        autoSize();

        function autoSize() {

          if (wrapSize.ratio < eleSize.ratio) {
            img.style.width = wrapSize.width * _zoom + "px";
            img.style.height = wrapSize.width / eleSize.ratio * _zoom + 'px';
          } else {
            img.style.width = wrapSize.height * _zoom * eleSize.ratio + 'px';
            img.style.height = wrapSize.height * _zoom + "px";
          }
        }
      }


    };
  }

  if (!file) {
    let msg = 'file为空';
    console.error(msg);
    typeof error === 'function' && error(msg);
    return;
  }

  let extName = file.name.substring(file.name.lastIndexOf(".") + 1).toLowerCase();

  if (accept) {
    let accepted = false;
    accept.split(',').some(v => {
      if (v === extName) {
        accepted = true;
        return accepted;
      }
    });
    if (!accepted) {
      let msg = '文件类型不匹配，允许：' + accept + '，当前：' + extName;
      console.error(msg);
      typeof error === 'function' && error(msg);
      return;
    }
  }

  let size, succeed, shardCount, shardSize, key;
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      size = file.size;//总大小
      succeed = 0;//当前上传数
      shardSize = 2 * 1024 * 1024;//以2MB为一个分片
      shardCount = Math.ceil(size / shardSize);//总片数
      let res = JSON.parse(xhr.responseText);
      if (!res.code) {
        key = res.data;
        uploadShard();
      }
    } else if (xhr.status !== 200) {
      let blkRet = JSON.parse(xhr.responseText);
      typeof error === 'function' && error(blkRet);
      console.error(blkRet);
    }
  };

  function uploadShard() {

    let start = succeed * shardSize,//当前分片开始下标
      end = Math.min(size, start + shardSize);//结束下标
    let formData = new FormData();

    formData.append("data", file.slice(start, end)); //slice方法用于切出文件的一部分
    formData.append("name", key + "." + extName);//文件名字
    formData.append("total", shardCount);  //总片数
    formData.append("index", succeed + 1);   //当前片数

    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(formData);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        succeed++;
        //显示状态
        typeof complete === 'function' && complete(succeed / shardCount);
        let res = JSON.parse(xhr.responseText);
        if (!res.code) {
          typeof success === 'function' && success(res.data);
        } else {
          uploadShard();
        }
      } else if (xhr.status !== 200) {
        let blkRet = JSON.parse(xhr.responseText);
        typeof error === 'function' && error(blkRet);
        console.error(blkRet);
      }
    };
  }
}

