(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(); // common.js
    }
    else if (typeof define === 'function') {
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
        sum(a=0, b=0) {
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

    }

    return EasyFunction;
});


