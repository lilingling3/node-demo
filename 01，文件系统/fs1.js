/*
文件写入：
    1，异步
    2，同步
    3，流式文件写入
    前三个只能写入一个内容,不适合大型文件写入

    4，简单文件写入 （简单同步/简单异步）
 */

var fs = require('fs');
/*
简单写入
fs.writeFile('hello2.text','简单写入的文件',function (err) {
    if(!err){
        console.log('写入成功');
    }
})
 */

// 流式写入

var ws = fs.createWriteStream('hello3.text');
// 监听流的状态
ws.once('open',function () {
        console.log('打开了');
});
ws.once('close',function () {
        console.log('关闭了');
});

ws.write('写了一个');
ws.write('写了两个');

ws.end(); // 流关闭


