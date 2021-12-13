
const {getFileMimeAsync,getFileMimeSync} = require("./module/common.js")
var http = require('http');
var fs = require("fs")
var path = require("path")
http.createServer(function (request, response) {
  
  //?获取地址
  let pathName = request.url=="/"?"/index.html":request.url
  const myURL = new URL(pathName, 'http://127.0.0.1:8081/');
  pathName = myURL.pathname
  //*获取后缀名
  let extname = path.extname(pathName)
  
  //console.log(extname)

  //?通过fs模块读取文件
  if(pathName!="/favicon.ico"){
      fs.readFile("./static"+pathName, async (err,data)=>{
          if(err){
              console.log(err)
              response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
              response.end('页面不存在');
              return
          }
          //console.log(extname)
          let mime = await getFileMimeSync(extname)
          response.writeHead(200, {'Content-Type': mime+';charset="utf-8"'});
          response.end(data);
      })
  }
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');