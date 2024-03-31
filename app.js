const http = require('http')
const server = http.createServer((req, res) => {
    console.log('resquest Event')
    res.end('Hi guys is me Again')
})
server.listen(5000, () => {
    console.log('Listening at portal 5000 ....')
})
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === "/about") {
      res.end("About Page");
    }
    res.end('Error Page')
    
// })
// serve.listen(5000, () => {
//     console.log('Server running at port : 5000 ....')
// })