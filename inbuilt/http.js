let http = require('http');

let server = http.createServer((req,res) => {
    res.write(' first node server ');
    res.end()
}) 

server.listen('< any port number>')