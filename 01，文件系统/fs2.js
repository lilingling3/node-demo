/*
文件读取：
    1，异步
    2，同步
    3，流式文件读取
    4，简单文件读取 （简单同步/简单异步）
 */

var fs = require('fs');
// fs.readFile('C:\\Users\\Administrator\\Desktop\\phot.jpg',function (err,data) {
//     if(!err){
//         fs.writeFile('hello.jpg',data,function () {
//             console.log('写入成功');
//         })
//     }
// });

var rs = fs.createReadStream('hello.jpg');
var ws = fs.createWriteStream('write.jpg');

rs.once('open',function () {
    console.log('可读流打开了');
});

rs.once('close',function () {
    console.log('可读流关闭了');
    ws.end();
});

ws.once('close',function () {
    console.log('可写流关闭了');
});
ws.once('open',function () {
    console.log('可写流打开了');
});
/*
 当我们用可读流读取数据时，需要绑定data事件
    当绑定data事件时，自动读取数据
 */

rs.on('data',function (data) {
    // console.log('读取到数据');
    // console.log(data.length/1024);
    ws.write(data)
});

