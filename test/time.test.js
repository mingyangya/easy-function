import { getNowTime } from '../src/time/index.js'

// 测试代码示例
test('获取当前时间: 格式为yyyy-mm-dd', () => {
  const regex = /^\d{4}-\d{2}-\d{2}$/

  expect(getNowTime()).toMatch(regex)
})

test('获取当前时间: 格式为yyyy-mm-dd hh:mm:ss', () => {
  console.log(getNowTime(true))
  // 验证结果是否符合预期格式（这里我们假设日期时间格式是 YYYY-MM-DD HH:mm:ss）
  const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/

  expect(getNowTime(true)).toMatch(regex)
})

test('获取当前时间: 格式为yyyy/mm/dd', () => {

  // 验证结果是否使用了自定义的分隔符
  const regex = /^\d{4}\/\d{2}\/\d{2}$/

  expect(getNowTime(false, '/')).toMatch(regex)
})


it('使用假数据验证getNowTime()，结果是否为2023-09-05', () => {
  // 假设当前日期是 2023 年 9 月 5 日（或其他任何一位数的月份或日期）
  // 正常情况下，我们无法直接设置 Jest 的系统时间，但可以通过模拟 Date 对象来测试
  // 这里我们简单地通过字符串比较来验证输出格式，因为实际系统时间不可能精确控制到这样的程度
  // 在实际应用中，你可能需要使用像 jest-date-mock 这样的库来模拟 Date 对象
  const expectedDateString = '2023-09-05'; // 假设的日期字符串
  const mockDate = new Date('2023-09-05'); // 模拟的 Date 对象
  const originalDate = global.Date; // 保存原始的 Date 对象

  // 替换全局的 Date 对象为模拟的 Date 对象
  global.Date = jest.fn(() => mockDate);

  // 调用函数并获取结果
  const timeString = getNowTime();

  // 验证结果是否符合预期格式，包括前导零
  expect(timeString).toEqual(expectedDateString);

  // 恢复原始的 Date 对象
  global.Date = originalDate;
})

