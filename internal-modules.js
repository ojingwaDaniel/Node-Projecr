// const { log } = require('console')
// const os = require('os')
// // info about the user 
// const user = os.userInfo()
// console.log(user)

// // methods returns the system uptime
// const Uptime = os.uptime()
// console.log(`The system Uptime is ${Uptime} Seconds`)
// // more info

// const currentInfo = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
    
   
// } 
// console.log(currentInfo);


// // paths
// const path = require('path')
// console.log(path.sep)
// // file-path
// const filePath = path.join('/content', 'subfolder', 'text.txt')
// console.log(filePath)
// const basePath = path.basename(filePath)
// console.log(basePath);

// // absolute path
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.js')
// console.log(absolute)


// // file system

// // sync method

// const { readFileSync, writeFileSync } = require('fs')
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync("./content/second.txt", "utf8");
// console.log(first);
// console.log(second);

// writeSync
// writeFileSync('./content/result-sync.txt', `hello here is the result of your sync : ${first} and ${second}`, { flag: 'a' })

// async method
const { readFile, writeFile } = require("fs");
readFile('./content/first.txt','utf8' ,(err,result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
         writeFile(
           "./content/2nd-result-async.txt",
             `Hello guys this the ${first} and the ${second} file`, (err, result) => {
                 if (err) {
                   console.log(err);
               }console.log(result)
           }
         );
    })
   
})