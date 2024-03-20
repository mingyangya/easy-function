'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 获取当前时间，并格式化
 * @param {boolean} {hasHour} 是否显示小时以下的详细信息
 * @param {string} {symbol} 字符间的间隔符，默认"-"
 * @returns {string} {timeString} 格式化后的时间戳
 * */
function getNowTime() {
  var hasHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
  var timeString = "",
    date = new Date(),
    // 日期对象
    year = date.getFullYear(),
    // 年份
    month = date.getMonth() + 1,
    // 月份
    day = date.getDate(); // 日

  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  timeString = year + symbol + month + symbol + day;
  if (hasHour) {
    var hour = date.getHours(),
      // 小时
      minute = date.getMinutes(),
      // 分钟
      second = date.getSeconds(); // 秒
    hour = hour > 9 ? hour : '0' + hour;
    minute = minute > 9 ? minute : '0' + minute;
    second = second > 9 ? second : '0' + second;
    timeString += " " + hour + ":" + minute + ":" + second;
  }
  return timeString;
}

/**
 * 阿拉伯数字(0-9,10,100,1000,10000,100000000)转化为简体汉字(零-九,十,百,千,万,亿)
 * @param {string|number} {param} 要转化的数字或汉字
 * @returns {string|number} {result} 阿拉伯数字或者简体汉字
 * */
function numberToWord(param) {
  var numbers = [{
    k: 0,
    v: "零"
  }, {
    k: 1,
    v: "一"
  }, {
    k: 2,
    v: "二"
  }, {
    k: 3,
    v: "三"
  }, {
    k: 4,
    v: "四"
  }, {
    k: 5,
    v: "五"
  }, {
    k: 6,
    v: "六"
  }, {
    k: 7,
    v: "七"
  }, {
    k: 8,
    v: "八"
  }, {
    k: 9,
    v: "九"
  }, {
    k: 10,
    v: "十"
  }, {
    k: 100,
    v: "百"
  }, {
    k: 1000,
    v: "千"
  }, {
    k: 10000,
    v: "万"
  }, {
    k: 100000000,
    v: "亿"
  }, {
    k: "零",
    v: "0"
  }, {
    k: "一",
    v: "1"
  }, {
    k: "二",
    v: "2"
  }, {
    k: "三",
    v: "3"
  }, {
    k: "四",
    v: "4"
  }, {
    k: "五",
    v: "5"
  }, {
    k: "六",
    v: "6"
  }, {
    k: "七",
    v: "7"
  }, {
    k: "八",
    v: "8"
  }, {
    k: "九",
    v: "9"
  }, {
    k: "十",
    v: 10
  }, {
    k: "百",
    v: 100
  }, {
    k: "千",
    v: 1000
  }, {
    k: "万",
    v: 10000
  }, {
    k: "亿",
    v: 100000000
  }];
  var filterItem = numbers.find(function (value) {
    return value.k === param;
  });
  return filterItem ? filterItem.v : param;
}

/**
 * 获取min,max间的随机数
 * @param {number} {min} 最小数
 * @param {number} {max} 最大数
 * @param {boolean} {integer} 随机整数
 * @returns {number} {result} 生成的随机数
 * */
function getRandom() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var integer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!Number.isInteger(min) || !Number.isInteger(max)) throw "输入合法的数字区间！";
  var random = Math.random() * (max - min) + min;
  return integer ? Math.round(random) : random;
}

/**
 * 生成随机的字符串（包含数字，大小写字母）
 * @param {number} {len} 字符串的长度
 * @results {string} {result} 随机字符串
 * */
function randomString() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var result = '',
    str = 'abcefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    wordLen = str.length;
  for (var i = 0; i < len; i++) {
    result += str.charAt(Math.floor(Math.random() * wordLen));
  }
  return result;
}

/**
 * javascript数据类型判断
 * @param {*} {param} 任何类型的变量
 * @returns {string} {result} 变量的数据类型
 * */
function typeOf(param) {
  var typeStr = Object.prototype.toString.call(param);
  //[object String]
  var result = typeStr.slice(8, -1).toLowerCase(); // 转化为小写

  return result;
}

/**
 * 对数组排序
 * @param {array} {arr} 排序的数组
 * @param {type} {1|2} 增序|降序
 * @returns {array} {resultArr} 排序后的数组
 * */
function sortArr() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var resultArr = [].concat(arr); // 新的数组
  resultArr.sort(function (a, b) {
    if (type === 2) {
      return b - a;
    } else {
      return a - b;
    }
  });
  return resultArr;
}

/**
 * 数组去重
 * @param {array} {arr} 去重的数组
 * @returns {array} {result} 去重后的数组
 * */
function arrUniq() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Array.from(new Set(arr));
}

exports.arrUniq = arrUniq;
exports.getNowTime = getNowTime;
exports.getRandom = getRandom;
exports.numberToWord = numberToWord;
exports.randomString = randomString;
exports.sortArr = sortArr;
exports.typeOf = typeOf;
