# typeOf
> 描述

输出给定变量的数据类型

> 参数

|     参数名     |    参数意义 | 值|
|:---------------:|:---------:|:---------:|
|param   | 变量   | 任意变量|

> 实例代码

```javascript
var easyFun=EasyFunction;

easyFun.typeOf();
// undefined

easyFun.typeOf(null);
// null

easyFun.typeOf(true);
// boolean

easyFun.typeOf(0);
// number

easyFun.typeOf("0");
// string

easyFun.typeOf({});
// object

easyFun.typeOf([]);
// array

easyFun.typeOf(function(){});
// function

easyFun.typeOf(function*(){});
// generatorfunction

easyFun.typeOf(Symbol());
// symbol

easyFun.typeOf(new Set());
// set

easyFun.typeOf(new ArrayBuffer());
// arraybuffer

easyFun.typeOf(new Promise(()=>{}));
// promise
```
