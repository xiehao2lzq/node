const fs = require("fs");
const { get } = require("https");

/* fs.readdir("./upLoad",(err,data)=>{
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
}) */

//!因为异步，拿不到返回值
/* function getData(){
    var a = "122123"
    setTimeout(() => {
        return a
    }, 1000);
}

console.log(getData()) */

//?回调函数解决异步

/* function getData(callback){
    setTimeout(() => {
        callback("回调")
    }, 1000);
}
function callback(a){
    console.log(a)
}
getData(callback) */

//?promise 解决异步
/* var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        var name = "xiehao";
        resolve(name);
    }, 1000);
})

p.then(result=>{
    console.log(result)
}) */

//?async 和Await

/* async function test(){
    return "async方法"
}

console.log(test()) //!返回值为Promise { 'async方法' } */

/* async function test(){
    return "async方法"
}

console.log(await test())//!报错，必须是awit必须在异步方法内 */

/* async function test(){
    return "async方法"
}

async function backData(){
     let data =await test()
     console.log(data)
}
backData() */

/* async function test(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name)
        },1000)
    })
}

async function backData(){
     let data =await test("nodejs async")
     console.log(data)
}
backData() */

//*定义一个isDir方法判断资源是文件还是目录
/* async function isDir(path){

    return new Promise((reslove,reject)=>{
        fs.stat(path,(err,data)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            if(data.isDirectory()){
                reslove(true)
            }
            if(data.isFile()){
                reslove(false)
            }
        })
    })
}

 function getRes(){
    var path ="./upLoad"
    var dirArr = []
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err)
            return
        }
        for(var i=0;i<data.length;i++){
            var isDirectory = await isDir((path+"/"+data[i]))
            if(isDirectory){
                dirArr.push(data[i])
            }
        }
        console.log(dirArr)
    })
    
}
getRes() */
//?读取流文件
/* var readStream = fs.createReadStream("./乡镇.json")
var count = 0;
var str = "";
readStream.on("data",(data)=>{
    str += data
    count++
})

readStream.on("end",()=>{
    console.log(count)
}) */
//?写入流文件
/* var str = ""
for(var i=0;i<5000;i++){
    str += "只有好好学习，才能避免和傻逼为伍\n"
}
var writeStream = fs.createWriteStream("./test.json")
writeStream.write(str)

writeStream.end()
writeStream.on("finish",()=>{
    console.log("写入完成")
}) */

//?管道流
var readStream = fs.createReadStream("./乡镇.json")
var writeStream = fs.createWriteStream("./乡镇 copy.json")

readStream.pipe(writeStream)