const _ = require('lodash')
const nums = [1, [2, [3, [4]]]]
const newNum = _.flatMapDeep(nums)
console.log(newNum);