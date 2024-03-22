/**
 * File 对象转化为base64字符串
 * @param {File} file 文件
 * @returns {Promise}
 */
export async function fileToBase64(file) {
  const reader = new FileReader()

  reader.readAsDataURL(file)

  return new Promise((resolve, reject) => {
    reader.onload = (e) => {
      console.log('success', e, reader)
      resolve({
        code: 0,
        status: 'success',
        data: reader.result
      })
    }

    reader.onabort = (e) => {
      console.log('abort', e, reader)
      resolve({
        code: 1,
        status: 'fail',
        data: 'abort'
      })
    }

    reader.onerror = (e) => {
      console.log('error', e, reader)

      resolve({
        code: 2,
        status: 'fail',
        data: 'error'
      })
    }
  })
}
