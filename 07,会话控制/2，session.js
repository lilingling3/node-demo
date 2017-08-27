var express = require('express');
var session = require('express-session')
var FileStore = require('session-file-store')(session);
var app = express();
// 使用session 中间件
app.use(session({
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,// 重新存储
    saveUninitialized: false, // 存储没有初始化的session
    // cookie: { secure: true }
}));

app.get('/testSession',function (req,res) {
    // console.log(req.session);
    req.session.name = 'lilingling';
    res.send('测试session')
});
app.get('/testSession2',function (req,res) {
     console.log(req.session.name);

    res.send(req.session.name)
});
app.listen(3000,function () {
    console.log('服务器启动');
});