const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Welcome to Danny's Tech Home")

    } if (req.url === '/about') {
        res.end('Here is a short History about our Company')
    }
    //  when the user enters acn address we dont have
    res.end('<h1> Opps! </h1> <p> We seen not to find the page you are looking for </p> <a href = "/">please navigate back  tp the homePage </a> ')
});
server.listen(5000);
