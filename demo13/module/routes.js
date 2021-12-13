const fs = require("fs")
var path = require("path")
let getFileMimeAsync = function(extname){
    return new Promise((resolve,reject)=>{
        fs.readFile("./data/mime.json",(err,data)=>{
            if(err){
                reject(err)
            }
            let mimeObj = JSON.parse(data.toString()) 
            //console.log(mimeObj[extname])
            resolve(mimeObj[extname])
        })
    })
}
exports.getFileMimeAsync = getFileMimeAsync

let getFileMimeSync = function(extname){
    let data = fs.readFileSync("./data/mime.json")
    let mimeObj = JSON.parse(data.toString()) 
    return(mimeObj[extname])
}
exports.getFileMimeSync = getFileMimeSync

let static  = function(request,response,staticPath){
    //?获取地址
  let pathName = request.url=="/"?"/index.html":request.url
  const myURL = new URL(pathName, 'http://127.0.0.1:8081/');
  pathName = myURL.pathname
  //*获取后缀名
  let extname = path.extname(pathName)
  
  //console.log(extname)

  //?通过fs模块读取文件
  if(pathName!="/favicon.ico"){
      /* 
        try {
            let data = fs.readFileSync("./"+staticPath+pathName)
            if(data){
                let mime = getFileMimeSync(extname)
                response.writeHead(200, {'Content-Type': mime+';charset="utf-8"'});
                response.end(data);
            }
        } catch (error) {
            
        }
      */
      fs.readFile("./"+staticPath+pathName, async (err,data)=>{
          if(!err){
            let mime = await getFileMimeSync(extname)
            response.writeHead(200, {'Content-Type': mime+';charset="utf-8"'});
            response.end(data);
          }
      })
  }
}
exports.static = static