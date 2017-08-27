var fs = require('fs');
var rs = fs.createReadStream('hello.jpg');
var ws = fs.createWriteStream('write1.jpg');

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

// 将rs里面的内容输出到ws 中
rs.pipe(ws);