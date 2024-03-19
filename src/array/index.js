/**
 * 对数组排序
 * @param {array} {arr} 排序的数组
 * @param {type} {1|2} 增序|降序
 * @returns {array} {resultArr} 排序后的数组
 * */
export function sortArr(arr = [], type = 1) {
  let resultArr = [].concat(arr) // 新的数组
  resultArr.sort(function (a, b) {
    if (type === 2) {
      return b - a
    } else {
      return a - b
    }
  })

  return resultArr
}

/**
 * 数组去重
 * @param {array} {arr} 去重的数组
 * @returns {array} {result} 去重后的数组
 * */
export function arrUniq(arr = []) {
  return Array.from(new Set(arr))
}
