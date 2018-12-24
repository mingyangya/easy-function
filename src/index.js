(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(); // common.js
    } else if (typeof define === 'function') {
        define(factory());//amd规范 ,require.js
    } else {
        global.EasyFunction = factory(); //浏览器环境
    }


})(typeof window !== "undefined" ? window : global, function () {
    'use strict';

    class EasyFunction {
        constructor(opt) {
            this.opt = opt;
        }

        static sum(a = 0, b = 0) {
            /**
             * 两个数字相加
             * @param {number} {a} 数字a
             * @param {number} {b} 数字b
             * @returns {number} {a+b} a与b的和
             * */
            const
                _a = isNaN(a) ? 0 : parseInt(a),
                _b = isNaN(b) ? 0 : parseInt(b);
            return _a + _b;
        }

        static getNowTime(hashour = false, symbol = "-") {
            /**
             * 获取当前时间，并格式化
             * @param {boolon} {hashour} 是否显示小时以下的详细信息
             * @param {string} {symbol} 字符间的间隔符，默认"-"
             * @returns {string} {timeString} 格式化后的时间戳
             * */
            let
                timeString = "",
                date = new Date(),           // 日期对象
                year = date.getFullYear(),   // 年份
                month = date.getMonth() + 1, // 月份
                day = date.getDate();        // 日
            month > 9 ? month : '0' + month;
            day > 9 ? day : '0' + day;
            timeString = year + symbol + month + symbol + day;
            if (hashour) {
                let
                    hour = date.getHours(),     // 小时
                    minute = date.getMinutes(), // 分钟
                    second = date.getSeconds(); // 秒
                hour > 9 ? hour : '0' + hour;
                minute > 9 ? minute : '0' + minute;
                second > 9 ? second : '0' + second;
                timeString += " " + hour + ":" + minute + ":" + second;
            }
            return timeString;
        }

        static numberToWord(param) {
            /**
             * 阿拉伯数字(0-9,10,100,1000,10000,100000000)转化为简体汉字(零-九,十,百,千,万,亿)
             * @returns {string|number} {result} 阿拉伯数字或者简体汉字
             * */
            let result;
            const numbers = [
                {k: 0, v: "零"},
                {k: 1, v: "一"},
                {k: 2, v: "二"},
                {k: 3, v: "三"},
                {k: 4, v: "四"},
                {k: 5, v: "五"},
                {k: 6, v: "六"},
                {k: 7, v: "七"},
                {k: 8, v: "八"},
                {k: 9, v: "九"},
                {k: 10, v: "十"},
                {k: 100, v: "百"},
                {k: 1000, v: "千"},
                {k: 10000, v: "万"},
                {k: 100000000, v: "亿"},
                {k: "零", v: "0"},
                {k: "一", v: "1"},
                {k: "二", v: "2"},
                {k: "三", v: "3"},
                {k: "四", v: "4"},
                {k: "五", v: "5"},
                {k: "六", v: "6"},
                {k: "七", v: "7"},
                {k: "八", v: "8"},
                {k: "九", v: "9"},
                {k: "十", v: 10},
                {k: "百", v: 100},
                {k: "千", v: 1000},
                {k: "万", v: 10000},
                {k: "亿", v: 100000000}
            ];
            const filterItem = numbers.find((value) => {
                return value.k === param;
            });
            result = filterItem ? filterItem.v : param;
            return result;
        }
    }
    return EasyFunction;
});


