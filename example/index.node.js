// const EasyFunction = require('../dist/dist.umd')
const EasyFunction = require('../dist/dist')

console.log(EasyFunction)
console.log(EasyFunction.add(3, 4))

var maximum = function(a, b) {
  return [a,b].sort((a,b) => b - a)[0]
};

console.log(maximum(3, 4))
