var express = require('express');
var sha1 = require('sha1');

require('./tools/connect_mongoose');
var User = require('./model/user');

var app = express();
app.use(express.static('public'));
app.get('/login',function (req,res) {
    var username = req.query.username;
    var password = req.query.password;

    User.findOne({username:username},function (err,doc) {
        if(err || !doc || doc.password != sha1(password)){
            res.send('登陆失败')
        }else {
            res.send('登陆成功')
        }
    })
    // if(username == 'lll'&&password=='123123'){
    //     res.send('登陆成功')
    // }else {
    //     res.send('登陆失败')
    // }
});
app.get('/register',function (req,res) {
    var username = req.query.username;
    var password = req.query.password;
    password = sha1(password); // 密码加密
    // var rpwd = req.query.rpwd;
    var email = req.query.email;

    User.create({
        username,
        password,
        email
    },function (err) {
        if(!err){
            res.send('注册成功');
        }else {
            res.send('用户名已经存在')
        }
        
    })

});

app.listen(3000,function () {
    console.log('服务器启动');
});