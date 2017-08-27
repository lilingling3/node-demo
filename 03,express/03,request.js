var express = require('express');
// 创建应用  代办web服务器
var app = express();
// 设置静态资源目录
app.use(express.static('public'));
/*
* 路由
*    在express中，服务器收到请求，是调用静态资源还是调用程序由路由决定
*    通过设置路由，实现地址与函数进行映射
*    / 表示根目录
* */

app.get('/hello',function (req,res) {
    // req 读取客户端发送的请求信息
    console.log(req.query); // 获取请求参数 查询字符串 对应多个值返回的是一个数组
    res.send('hello')
});



// 启动服务
app.listen(3000,function () {
    console.log('服务器启动');
});

