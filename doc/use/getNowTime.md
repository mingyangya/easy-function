# getNowTime

> 描述

输出当前时间

> 参数

|     参数名     |    参数意义 | 值|
|:---------------:|:---------:|:---------:|
|hasHour   | 显示小时以下的时间   | false(true)|
|symbol   | 连接符   | -(/)|

> 实例代码

```javascript
var easyFun=EasyFunction;

easyFun.getNowTime();
// 2018-12-24

easyFun.getNowTime(true);
// 2018-12-24 12:00:06

easyFun.getNowTime(true,"-");
// 2018-12-24 12:00:06

easyFun.getNowTime(true,"/");
// 2018/12/24 12:00:06

easyFun.getNowTime(false,"/");
// 2018/12/24

easyFun.getNowTime(false,"-");
// 2018-12-24
```
