import { add } from './index'
// const { add } = require('./index.js')

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})