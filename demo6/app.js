/* 
*1、fs.stat 检测是文件还是目录
*2、fs.mkdir 创建目录
*3、fs.writeFile 创建写入文件
*4、fs.appendFile 追加文件
*5、fs.readFile 读取文件
*6、fs.readdir 读取目录
*7、fs.rename 重命名
*8、fs.rmdir 删除目录
*9、fs.unlink 删除文件
*/

const fs = require("fs")
//?1、fs.stat 检测是文件还是目录
/* fs.stat("./html",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`是文件：${data.isFile()}`)
    console.log(`是目录：${data.isDirectory()}`)
}) */

//?2、fs.mkdir 创建目录

/* 
*参数一，path，将要创建的目录的路径
*参数二，目录权限（读写权限），默认777
*callback，回调函数，传递异常参数err
*/
/* fs.mkdir("./css",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("创建成功")
}) */

//?3、fs.writeFile 创建写入文件

/* 
*1、fileName (string) 文件名称
*2、data （string|Buffer） 将要写入的内容，可以是字符串或者buffer数据
*3、options （Object） 配置对象，包括：
    ?encoding （string） 可选值，默认 “utf8”，当data为buffer时，该值应该为 ignored。
    ?mode         (Number)        文件读写权限，默认值 438
    ?flag            (String)            默认值 ‘w'
*4、callback，回调函数，传递异常参数err
*/

/* fs.writeFile("./html/index.html","写入一些东西，我又写东西了",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("创建写入成功")
}) */

//?fs.appendFile 追加文件
/* fs.appendFile("./css/base.css","body{color:#fff}",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("appendFile 成功")
}) */

//?fs.readFile 读取文件

/* fs.readFile("./html/index.html",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
    console.log(data.toLocaleString())
}) */

//?fs.readdir 读取目录
/* fs.readdir("./html",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
}) */

//?fs.rename 重命名 移动
/* fs.rename("./css/base.css","./html/css.html",(err)=>{
    if(err){
        console.log(err)
        return
    }
}) */

//?fs.rmdir 删除目录

/* fs.rmdir("./html",(err)=>{
    if(err){
        console.log(err)
        return
    }
}) */
//?fs.unlink 删除文件

fs.unlink("./html/index.html",(err)=>{
    if(err){
        console.log(err)
        return
    }
})