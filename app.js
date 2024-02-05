function Greetings(name) {
    console.log(`Hi ${name} good day , how are you doing`)
}
Greetings('Chidebere')
const log = require('./logger')
log('messsssssssage')


//path
const path = require('path')
const pathObj = path.parse(__filename)
console.log(pathObj)