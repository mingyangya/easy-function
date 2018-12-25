# 使用文档

## 初始化

> 引用方式

## AMD

以require.js为例演示

```javascript
require(['easy-function.js'],function(easyFun){
  // todo something...
})
```

## CommonJS

使用`npm install easy-function`安装
```javascript
var easyFun=require("easy-function");

//或者 var {getNowTime}=require("easy-function");

// todo something... 
```

## 浏览器

使用`<script>`标签引入

```html
<script src="easy-function.js"></script>
```

## 方法简介

## getNowTime
输出当前时间
```javascript
var nowTime=easyFun.getNowTime();
// 2018-12-24
```

## numberToWord
阿拉伯数字(0-9,10,100,1000,10000,100000000)转化为简体汉字(零-九,十,百,千,万,亿)
```javascript
var changeResult=easyFun.numberToWord(5);
// 五
```

## getRandom
 给定一个区间，输出该区间内的随机数
```javascript
var random=easyFun.getRandom(0,2);
// 1.2
``` 
## typeOf
输出给定变量的数据类型

```javascript
easyFun.typeOf({});
// object
```

## arrUniq
给定一个数组，去除其中重复的元素。

```javascript
easyFun.filterArr([2, 9, 6, 2, 5, 2]);
//[2, 9, 6, 5]
```
## randomString
生成随机的字符串（包含数字，大小写字母）

```javascript
easyFun.randomString();
// F8IrZ2joV4otC6zN
```
## sortArr
对数组进行排序（类型1：增序，类型2:降序）

```javascript
easyFun.sortArr([2,5,1,0]);
// [0,1,2,5]
```




