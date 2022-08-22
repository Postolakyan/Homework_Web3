const http = require('http')

const server = http.createServer(function(req, res){
    res.write('Hello');
    return res.end()
})
server.listen(2000);