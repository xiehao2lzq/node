const fs = require("fs")

fs.readdir("./upLoad",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
    let path = "./upLoad/"
    var  dirArr = []
    for(let i=0;i<data.length;i++){
        //!fs的方法都是异步这样不行，用递归
        fs.stat(path+data[i],(err2,data2)=>{
            if(err2){
                console.log(err2)
                return
            }
            if(data2.isDirectory()){
                dirArr.push(data[i])
            }
        })
    }
    console.log(dirArr)
})