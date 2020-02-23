var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request  was made :' + req.url);
    res.writeHead(210,{'Content-Type': 'application/json'});
    var myobj = {
        name: 'Chouaib',
        job: 'WebDev',
        age: 23
    };
    res.end(JSON.stringify(myobj));
});

server.listen(3000,'127.0.0.1');
console.log('listenning to port 3000');