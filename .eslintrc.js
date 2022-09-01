module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 13
  },
  "rules": {
    'semi': [1, 'never'], // 结尾的分号
    'space-in-parens': 1, // 函数参数之间的空格
    'space-before-function-paren': 1, // 函数参数前的空格
    'comma-spacing': 1, // 逗号后有一个空格
    'object-curly-spacing': 0,
    'no-unneeded-ternary': 0,
    'space-infix-ops': 1, // 比较运算符两边的空格
    'no-unused-vars': [ 1, { vars: 'all', args: 'none' } ],
    'key-spacing': [ 1, { beforeColon: false, afterColon: true } ],
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': 1,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'prefer-const': 0,
    'prefer-promise-reject-errors': 0,
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'standard/no-callback-literal': 0
  }
};
