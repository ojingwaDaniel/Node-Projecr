const _ = require('lodash')
const nums = [1, [2, [3, [4]]]]
const newNumArray = _.flatMapDeep(nums)
console.log(newNumArray);