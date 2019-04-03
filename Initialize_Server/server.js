/* 
Use node.js to create web services
*/

const http = require('http');

http.createServer(function (request, response) {
    console.log('request comes', request.url);
    response.end('123');
}).listen(8888);

console.log('server listening on 8888');