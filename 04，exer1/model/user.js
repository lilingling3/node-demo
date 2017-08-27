var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username:{
        type:String,
        unique:true // 确保唯一性
    },
    password:String,
    emal:String
});

module.exports =  mongoose.model('user',UserSchema); // 直接导出模型对象