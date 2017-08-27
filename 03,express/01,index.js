var express = require('express');
// 创建应用
var app = express();
// 设置静态资源目录
app.use(express.static('public'));
// 启动服务
app.listen(3000,function () {
    console.log('服务器启动');
});

