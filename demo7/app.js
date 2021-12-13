//*判断服务器上有没有uoload目录。如果没有，创建这个目录，有的话不做操作
const fs  = require("fs")
var path = "./upLoad"
fs.stat(path,(err,data)=>{
    if(err){
        console.log(err)
        //*创建目录
        mkdir(path)
    }
    if(!(data.isDirectory())){
        //*创建目录
        mkdir(path)
    }
})
//创建目录
function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err)
            return
        }
    })
}