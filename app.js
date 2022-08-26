const  http  =  require("http");

const server  =  http.createServer(function(req, res)   {
    res.write('hello');
    return res.end()
});

server.listen(3000);