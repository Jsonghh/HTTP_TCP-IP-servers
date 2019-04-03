const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request comes', request.url);
    
    const html = fs.readFileSync('fred.html', 'utf8')
    // content-type is 'text/html' by default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(html);
}).listen(8888);

