var express = require('express');

var bodyParser = require('body-parser');

// 引用路由
var userRouter = require('./router/user');
// 创建应用  代办web服务器
var app = express();
// 设置静态资源目录 中间件
app.use(express.static('public'));
// 配置中间件body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// 创建router 对象 将路由统一配置到这个对象上
// var router = express.Router();
// router.get('/user',function () {
//     console.log('hello');
// })
// app.use(userRouter);
app.use('/user',userRouter);


// 启动服务
app.listen(3000,function () {
    console.log('服务器启动');
});

