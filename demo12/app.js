
const routes = require("./module/routes.js")
var http = require('http');
var fs = require("fs")


http.createServer(function (request, response) {
  routes.static(request, response,"static")
  const myURL = new URL(request.url, 'http://127.0.0.1:8081/');
  pathName = myURL.pathname
  setTimeout(()=>{
    if(pathName=="/login"){
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end("登录");
      }
  },0)
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');