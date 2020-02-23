var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made by :' + req.url);
    if (req.url === '/home' || req.url === '/')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if (req.url === '/Contact')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
    
});

server.listen(3000, '127.0.0.1');
console.log('Server is running : port 3000');