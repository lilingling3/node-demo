var express = require('express');
var app = express();
//为一个地址配置多个路由
app.get('/hello',function (req,res,next) {
    console.log('路由1');
    // res.send('路由1')  只能返回一个响应
    next();
});
app.get('/hello',function (req,res) {
    console.log('路由2');
    res.send('路由2')
});
app.get('/hello',function (req,res) {
    console.log('路由3');
    res.send('路由3')
});

app.listen(3000,function () {
    console.log('服务器启动');
});