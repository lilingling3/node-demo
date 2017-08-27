var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_test');
// 获取schema
var Schema = mongoose.Schema;
// 创建schema对象
var stuSchema = new Schema({
    name:String,  // 会尝试做类型转换
    age:Number,
    gender:{
        type:String,
        default:'女'
    }
});

//model 对象 就是数据库中的集合
// 第一参数 哪个集合  使用哪个Schema进行约束
// 通过model 操作数据库
var StuModel = mongoose.model('student', stuSchema);  // 在数据库中默认是复数

StuModel.create(
    {
    name:'swk',
    age:18
},function (err) {
    if(!err){
        console.log('数据库插入文档成功');
    }
});

