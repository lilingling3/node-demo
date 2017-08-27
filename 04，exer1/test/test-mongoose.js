require('../tools/connect_mongoose');

var User = require('../model/user');

User.create({
    username:'admin',
    password:'123123',
    emal:'ab@163.com'
},function (err) {
    if(!err){
        console.log('插入成功');
    }
});