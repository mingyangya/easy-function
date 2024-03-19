/**
 * 获取当前时间，并格式化
 * @param {boolean} {hasHour} 是否显示小时以下的详细信息
 * @param {string} {symbol} 字符间的间隔符，默认"-"
 * @returns {string} {timeString} 格式化后的时间戳
 * */
export function getNowTime(hasHour = false, symbol = "-") {
  let
    timeString = "",
    date = new Date(),           // 日期对象
    year = date.getFullYear(),   // 年份
    month = date.getMonth() + 1, // 月份
    day = date.getDate()         // 日

  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  timeString = year + symbol + month + symbol + day

  if (hasHour) {
    let
      hour = date.getHours(),     // 小时
      minute = date.getMinutes(), // 分钟
      second = date.getSeconds()  // 秒
    hour = hour > 9 ? hour : '0' + hour
    minute = minute > 9 ? minute : '0' + minute
    second = second > 9 ? second : '0' + second
    timeString += " " + hour + ":" + minute + ":" + second
  }

  return timeString
}
