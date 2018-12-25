# getRandom

> 描述

给定一个区间[min,max]，输出该区间内的随机数

> 参数

|     参数名     |    参数意义 | 值|
|:---------------:|:---------:|:---------:|
|min   | 最小数值   | 整数|
|max   | 最大数值   | 整数|
|integer|  随机整数 |false(true)|

> 实例代码

```javascript
var easyFun=EasyFunction;

easyFun.getRandom(0,2);
// 1.2

easyFun.getRandom();
// 0.8

easyFun.getRandom(2,5,true);
// 3
``` 
