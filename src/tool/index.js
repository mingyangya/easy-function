/**
 * 获取min,max间的随机数
 * @param {number} {min} 最小数
 * @param {number} {max} 最大数
 * @param {boolean} {integer} 随机整数
 * @returns {number} {result} 生成的随机数
 * */
export function getRandom(min = 0, max = 1, integer = false) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) throw "输入合法的数字区间！"
  let random = Math.random() * (max - min) + min

  return integer ? Math.round(random) : random
}

/**
 * 生成随机的字符串（包含数字，大小写字母）
 * @param {number} {len} 字符串的长度
 * @results {string} {result} 随机字符串
 * */
export function randomString(len = 16) {
  let result = '',
    str = 'abcefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    wordLen = str.length
  for (let i = 0; i < len; i++) {
    result += str.charAt(Math.floor(Math.random() * wordLen))
  }

  return result
}
