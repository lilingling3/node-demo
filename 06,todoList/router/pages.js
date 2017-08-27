var express = require('express');
var Item = require('../model/Item');
var router = express.Router();
router.get('/login',function (req,res) {
    res.render('login.ejs',{msg:{}})
});
router.get('/register',function (req,res) {

     res.render('register.ejs',{msg:{}})
});
router.get('/item_list',function (req,res) {
    // console.log(req.session.user);  // 判断是否登录 登录后才能看到item_list页面
    if(req.session.loginUser){
        // 获取用户id,查询相关用户items
        var userId = req.session.loginUser._id;
        Item.find({userId:userId},function (err,items) {
            console.log(items);
            res.render('item_list.ejs',{session:req.session,items:items})
        });
    }else {
        res.render('login.ejs',{msg:{error:'请登录后再访问该页面'}})
    }
});
// 添加事项
router.post('/addItem',checkLogin,function (req,res) {
    var title = req.body.title;
    var userId = req.session.loginUser._id;

    Item.create({
        title:title,
        userId:userId // objectId 类型
    },function (err) {
        if(!err){
            console.log('代办事项插入成功');
            
            res.redirect('/item_list')
        }
    });

});
// 检查用户是否登录
function checkLogin(req,res,next) {
    // 判断用户是否登录
    if(req.session.loginUser){
        next()
    }else {
        res.render('login.ejs',{msg:{error:'请登录后再访问该页面'}})
    }
}
// 修改状态
router.get('/updateStatus',checkLogin,function (req,res) {
    var id = req.query.id; // 修改哪一个
    var status = req.query.status;
    // 获取用户id
    var userId = req.session.loginUser._id;

    Item.updateOne({_id:id,userId:userId},{$set:{status:status}},function (err) {
        res.redirect('/item_list')
    })
});

// 修改title
router.post('/updateTitle',checkLogin,function (req,res) {
    var title = req.body.title;
    var id = req.body.id;
    // 获取用户id
    var userId = req.session.loginUser._id;
    Item.updateOne({_id:id,userId:userId},{$set:{title:title}},function (err) {
        res.redirect('/item_list')
    })
});
module.exports = router;