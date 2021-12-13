const fs = require("fs")
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

