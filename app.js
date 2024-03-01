const http = require('http')
const server = http.createServer((req, res) => {
    console.log('resquest Event')
    res.end('Hi guys is me Again')
})
server.listen(5000, () => {
    console.log('Listening at portal 5000 ....')
})