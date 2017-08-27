var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
// 使用cookie中间件
app.use(cookieParser());
app.get('/testCookie',function (req,res) {
    res.cookie('name','lilingling',{maxAge:1000*60*60*24*365*10}); //设置10年过期的cookie
    res.send('<h3>cookie发送</h3>')
});
app.get('/updateCookie',function (req,res) {
    res.cookie('name','lilingling3',{maxAge:0}); //删除cookie
    res.clearCookie('name'); //删除cookie
    res.send('<h3>cookie修改</h3>')
});
app.get('/checkCookie',function (req,res) {
    // var cookie = req.get('Cookie');
    // console.log(cookie); // 解析cookie
    console.log(req.cookies);
    res.send('<h3>cookie读取</h3>')
});
app.listen(3000,function () {
    console.log('服务器启动');
});