/*
fs 模块操作文件

 */

var fs = require('fs');
// 向文件中写入内容

// 打开文件
var fd = fs.openSync('hello.text','a');  // 返回文件描述符
// var fd = fs.openSync('hello.text','w');  // 返回文件描述符
// 文件写入内容
fs.writeSync(fd,'hello node');
// 关闭文件
fs.closeSync(fd);