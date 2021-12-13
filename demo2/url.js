var api  = "video/BV11t411k79h?p=2"
const data = new URL(`${api}`,'https://www.bilibili.com/') // new一个URL实例
console.log(data) // 可以打印出来看看里面有什么，
const name = data.searchParams.get('p') // 通过searchParams的get可以获取到想要获取的数据
console.log(name)