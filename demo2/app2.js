const http  = require("http");

http.createServer(function(req,res){

    //console.log(req.url);//?获取url
    if(req.url!=="/favicon.ico"){
        const data = new URL(`${req.url}`,'https://www.bilibili.com/') // new一个URL实例
        console.log(data.searchParams.get("name"))
    }
    //?设置响应头
    res.writeHead(200,{"Content-type":"text-html;charset=UTF-8"});

    res.write("<head><meta charset='utf-8'></head>")

    res.write("你好node.js");

    res.end()
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')