var url = require('url');
var http = require('http');


http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
    if(req.url !=='favicon.ico'){
        var pathname = url.parse(res.url).pathname;
        pathname = pathname.replace(/\//, '');
        console.log(pathname);
        res.end('');
    }
}).listen(8000);

console.log('server is run at 8000')

