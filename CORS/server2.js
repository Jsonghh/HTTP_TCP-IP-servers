const http = require('http');

http.createServer(function (request, response) {
    console.log('request comes', request.url);
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });
    response.end('123');

}).listen(8887);

console.log('server listening on 8887');