var express = require('express');
var user = require('../model/User');
var sha1 = require('sha1');
var router = express.Router();
// 登录
router.post('/login',function (req,res) {
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    user.findOne({username:username},function (err,doc) {
        if(!err && doc && doc.password === sha1(password)){
            var loginUser = doc.toObject(); // 不用操作数据库转成普通对象  这里面doc是数据库对象
            // 删除对象中敏感数据
            delete loginUser.password; // 删除敏感数据密码
            // 设置session
             req.session.loginUser = loginUser;
            res.redirect('/item_list');
        }else {
            res.render('login.ejs',{msg:{
                error:'用户名或密码错误',
                umText : username
            }})
        }
    })
});

// 注册
router.post('/register',function (req,res) {
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var repwd = req.body.repwd.trim();
    var email = req.body.email.trim();

    // 错误消息
    var msg = {};
    // 验证
    var umReg = /^[a-z0-9_-]{3,16}$/i;
    var pwdReg = /^[a-z0-9_-]{6,18}$/i;
    var emalReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    if(!umReg.test(username)){
        msg.username = '用户名不合法'
    }
    if(!pwdReg.test(password)){
        msg.password = '密码不合法'
    }
    if(password != repwd){
        msg.rpwd = '密码不一致'
    }
    if(!emalReg.test(email)){
        msg.email = '邮箱不合法'
    }
     // 表单回显
    msg.umText = username;
    msg.emlText = email;

     if(msg.username || msg.password || msg.rpwd || msg.email){
        // 返回错误页面
        res.render('register.ejs',{msg:msg});

        // 验证有错误
        return;
     }

    // 保存数据库
    user.create({
        username:username,
        password:sha1(password),
        email:email
    },function (err) {
        if(!err){
            res.redirect('/login')
        }else{
        //  回到注册页面
            res.render('register.ejs',{
                msg:{
                    username:'用户名已存在',
                    umText : username,
                    emlText : email,
                }
            })
        }
    })



});

// 登出
router.get('/logout',function (req,res) {
    // 文件保存跟数据库保存出现冲突 session删除干净
    delete req.session;// 删除session
    res.clearCookie('connect.sid'); // 删除保存session的cookie
    // 重定向
    res.redirect('/login')
});
module.exports = router;