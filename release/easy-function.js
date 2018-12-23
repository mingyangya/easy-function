"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        module.exports = factory(); // common.js
    } else if (typeof define === 'function') {
        define(factory()); //amd规范 ,require.js
    } else {
        global.EasyFunction = factory(); //浏览器环境
    }
})(typeof window !== "undefined" ? window : global, function () {
    'use strict';

    var EasyFunction = function () {
        function EasyFunction(opt) {
            _classCallCheck(this, EasyFunction);

            this.opt = opt;
        }

        _createClass(EasyFunction, [{
            key: "sum",
            value: function sum() {
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                /**
                 * 两个数字相加
                 * @param {number} {a} 数字a
                 * @param {number} {b} 数字b
                 * @returns {number} {a+b} a与b的和
                 * */
                var _a = isNaN(a) ? 0 : parseInt(a),
                    _b = isNaN(b) ? 0 : parseInt(b);
                return _a + _b;
            }
        }]);

        return EasyFunction;
    }();

    return EasyFunction;
});
