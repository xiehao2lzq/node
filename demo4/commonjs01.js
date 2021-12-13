/* 
*模块化思想，将方法封装成模块，通过export导出，require导入
*/
var tools = require("./module/tools")
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(tools.formaterApi("bibibi"))
  response.end('Hello World');
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');