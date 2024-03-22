(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.easyFunction = {}));
})(this, (function (exports) { 'use strict';

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

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  /**
   * File 对象转化为base64字符串
   * @param {File} file 文件
   * @returns {Promise}
   */
  function fileToBase64(_x) {
    return _fileToBase.apply(this, arguments);
  }
  function _fileToBase() {
    _fileToBase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
      var reader;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            reader = new FileReader();
            reader.readAsDataURL(file);
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              reader.onload = function (e) {
                console.log('success', e, reader);
                resolve({
                  code: 0,
                  status: 'success',
                  data: reader.result
                });
              };
              reader.onabort = function (e) {
                console.log('abort', e, reader);
                resolve({
                  code: 1,
                  status: 'fail',
                  data: 'abort'
                });
              };
              reader.onerror = function (e) {
                console.log('error', e, reader);
                resolve({
                  code: 2,
                  status: 'fail',
                  data: 'error'
                });
              };
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fileToBase.apply(this, arguments);
  }

  exports.arrUniq = arrUniq;
  exports.fileToBase64 = fileToBase64;
  exports.getNowTime = getNowTime;
  exports.getRandom = getRandom;
  exports.numberToWord = numberToWord;
  exports.randomString = randomString;
  exports.sortArr = sortArr;
  exports.typeOf = typeOf;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
