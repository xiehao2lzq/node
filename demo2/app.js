
//?引入http模块
var http = require('http');
//?request 获取url传来的信息
//?response 给浏览器响应信息
http.createServer(function (request, response) {
  //?设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});

  //?结束并且输出
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');