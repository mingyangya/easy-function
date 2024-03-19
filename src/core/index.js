/**
 * javascript数据类型判断
 * @param {*} {param} 任何类型的变量
 * @returns {string} {result} 变量的数据类型
 * */
export function typeOf(param) {
  const typeStr = Object.prototype.toString.call(param)
  //[object String]
  const result = typeStr.slice(8, -1).toLowerCase() // 转化为小写

  return result
}
