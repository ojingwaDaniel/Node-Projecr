const http = require('http')
const server = http.createServer((req, res) => {
    res.write('Welcome to Our Tech Home')
    res.end()
    
})
server.listen(5000)