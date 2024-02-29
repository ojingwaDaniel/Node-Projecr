const _ = require('lodash')
const nums = [1, [2, [3, [4,[5]]]]]
const newNumArray = _.flatMapDeep(nums)
console.log(newNumArray);
console.log('Hi guys this is node lesson practising to be good at it, ' )