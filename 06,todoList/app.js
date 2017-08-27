var express = require('express');
var mongoose = require('./tools/connect_mongoose');
var bodyParser = require('body-parser');
var sha1 = require('sha1');

var routerPage = require('./router/pages');
var routerUser = require('./router/user');
var session = require('express-session');
// sessiong 存储在文件 保证服务器重启后 数据不会丢失 会创建一个文件夹
var FileStore = require('session-file-store')(session);
var app = express();

// 使用session 中间件
app.use(session({
    store: new FileStore(), // 增加session存储 配置session-file-store 中间件
    secret: 'keyboard cat',
    resave: false,// 重新存储
    saveUninitialized: false, // 存储没有初始化的session
    // cookie: { secure: true }
}));


// 设置模板引擎
app.set('view engine', 'ejs');

app.set('views', './views');//设置存放目录
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // 是否把值转成对象

app.use(routerPage);
app.use(routerUser);

// 配置404 页面中间件
app.use(function (req,res) {
    res.status(404);
    res.render('404.ejs')
});


app.listen(3000,function () {
    console.log('服务启动');
});