require('./tools/connect_mongoose');

var User = require('./tools/user');
// console.log(UserModel);
User.create({
    username:'admin',
    password:'124'
},function (err) {
    if(!err){
        console.log('插入成功');
    }
});