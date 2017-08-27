var express = require('express');
var app = express();
app.get('/helloRes',function (req,res) {
    // res.status(404).send('服务器返回内容')  // 设置状态码 并发送内容
    // res.sendStatus(404)  发送状态码
    // sendFile 向浏览器发送一个文件
    // res.sendFile(__dirname +'/public/photo.jpg'); // 发送文件使用绝对路径
    // res.download(__dirname +'/public/photo.jpg'); // 让浏览器下载

    res.redirect('http://www.baidu.com') // 重定向
});

app.listen(3000,function () {
    console.log('服务器启动');
});