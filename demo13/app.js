
const routes = require("./module/routes.js")
var http = require('http');
var fs = require("fs")
const ejs = require("ejs")
http.createServer(function (request, response) {
  routes.static(request, response,"static")
  const myURL = new URL(request.url, 'http://127.0.0.1:8081/');
  pathName = myURL.pathname
  setTimeout(()=>{
    if(pathName=="/login"){
        let msg = "数据库存储的数据"
        ejs.renderFile("./views/login.ejs",{msg},(err,data)=>{
          response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
          response.end(data)
        })
    }else if(pathName=="/news"){
      let params = myURL.searchParams
      console.log(params.get("id"))
      response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      response.end()
    }
  },0)
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');