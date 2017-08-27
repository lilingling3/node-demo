var express = require('express');
var app = express();
app.use(express.static('public'));
// 设置模板引擎
app.set('view engine', 'ejs');

app.set('views', './views');//设置存放目录

app.get('/hello',function (req,res) {
    var username = req.query.username;
    res.render('hello2.ejs',{
        username:username
    })
});
app.listen(3000,function () {
    console.log('服务启动');
});