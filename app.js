let http = require('http');

http.createServer((request, Response) => {
  Response.writeHead(200, {'Content-Type': 'text/plain'});

  Response.end('hello')
}).listen(8888);

console.log('888')