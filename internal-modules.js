const os = require('os')
// info about the user 
const user = os.userInfo()
console.log(user)

// methods returns the system uptime
const Uptime = os.uptime()
console.log(`The system Uptime is ${Uptime} Seconds`)
// more info

const currentInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    
   
} 
console.log(currentInfo);


// paths
const path = require('path')
console.log(path)
