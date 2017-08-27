var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemSchema = new Schema({
    title:String,
    status:{
        type:Number,
        default:1
    },// 0 删除 1 未完成 2 完成
    userId:Schema.Types.ObjectId // objectId 类型
});

module.exports = mongoose.model('item',ItemSchema);