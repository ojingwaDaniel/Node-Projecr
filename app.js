function Greetings(name) {
    console.log(`Hi ${name} good day , how are you doing`)
}
Greetings('Chidebere')
var logger = require('./logger')
logger.result = 'this is the response message'
console.log(logger)