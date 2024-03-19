
/**
 * 阿拉伯数字(0-9,10,100,1000,10000,100000000)转化为简体汉字(零-九,十,百,千,万,亿)
 * @param {string|number} {param} 要转化的数字或汉字
 * @returns {string|number} {result} 阿拉伯数字或者简体汉字
 * */
export function numberToWord(param) {
  const numbers = [
    { k: 0, v: "零" },
    { k: 1, v: "一" },
    { k: 2, v: "二" },
    { k: 3, v: "三" },
    { k: 4, v: "四" },
    { k: 5, v: "五" },
    { k: 6, v: "六" },
    { k: 7, v: "七" },
    { k: 8, v: "八" },
    { k: 9, v: "九" },
    { k: 10, v: "十" },
    { k: 100, v: "百" },
    { k: 1000, v: "千" },
    { k: 10000, v: "万" },
    { k: 100000000, v: "亿" },
    { k: "零", v: "0" },
    { k: "一", v: "1" },
    { k: "二", v: "2" },
    { k: "三", v: "3" },
    { k: "四", v: "4" },
    { k: "五", v: "5" },
    { k: "六", v: "6" },
    { k: "七", v: "7" },
    { k: "八", v: "8" },
    { k: "九", v: "9" },
    { k: "十", v: 10 },
    { k: "百", v: 100 },
    { k: "千", v: 1000 },
    { k: "万", v: 10000 },
    { k: "亿", v: 100000000 }
  ]
  const filterItem = numbers.find((value) => {
    return value.k === param
  })

  return filterItem ? filterItem.v : param
}
