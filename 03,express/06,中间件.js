var express = require('express');

var bodyParser = require('body-parser');
// 创建应用  代办web服务器
var app = express();
// 设置静态资源目录 中间件
app.use(express.static('public'));
// 配置中间件body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function (req,res,next) {
//     console.log('中间件hello');
//     res.send('中间件hello 返回的内容')
//     // next()
// });


app.get('/hello',function (req,res) {
    console.log('路由hello');
    res.send('hello 返回的内容')
});
app.post('/hello',function (req,res) {
    // console.log('路由hello');
    /*
    * 使用中间件解析请求体中的内容
    * body-parser
    * */
    console.log(req.body);
    res.send('hello 返回的内容')
});
// 启动服务
app.listen(3000,function () {
    console.log('服务器启动');
});

