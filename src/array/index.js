/**
 * @function
 * @desc 数组分割为指定大小的更小数组
 * @param {array} arr 原数组
 * @param {number} size 小数组的长度
 * @param {array} result 更小数组合集
 */
export const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }).map((v, i) => arr.slice(i * size, (i + 1) * size))

/**
 * @function
 * @desc 移除数组中的虚值falsy（false, null, 0, "", undefined, NaN）
 * @param {array} arr 数组
 * @returns {array}  新数组
 * @example
 * compactArray([1, 2, '', false, NaN, undefined, null, 0])
 * // return [1, 2, 3]
 */
export const compactArray = arr => arr.filter(Boolean)

/**
 * @function
 * @desc 数组去重
 * @param {array} arr 去重的数组
 * @returns {array} result 去重后的数组
 * */
export const arrUniq = (arr = []) => Array.from(new Set(arr))

/**
 * @function
 * @desc 对数组排序
 * @param {array} arr 排序的数组
 * @param {type} 1|2 增序|降序
 * @returns {array} resultArr 排序后的数组
 * */
export const sortArr = (arr = [], type = 1) => [...arr].sort((a, b) => type === 2 ?  b - a : a - b)

/**
 * @function
 * @desc 计算数组中某个元素的个数
 * @param {array} arr 数组
 * @param {any} v 值
 * @returns {Number} 个数
 */
export const countOccurrences = (arr, v) => arr.reduce((a, b) => a + (b === v ? 1 : 0), 0)

/**
 * @function
 * @desc 判断数组是否为排序数组，1正序，-1倒序，0无序
 * @param {array} arr 数组
 * @returns {Number} 排序方式
 * @example
 * isSorted([1, 2, 3])
 * // return 1
 * isSorted([3, 2, 1])
 * // return -1
 */
export const isSorted = (arr) => {
  const direction = arr[0] > arr[1] ? -1 : 1
  const len = arr.length

  for(let [i, v] in arr.entries()) {
    if(i === len - 1) return direction
    else if((v - arr[i + 1]) * direction > 0) return 0
  }
}
