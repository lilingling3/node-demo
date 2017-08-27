var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_test',{useMongoClient: true,});
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
// 插入文档
/*
StuModel.create(
    {
        name:'swk',
        age:18
    },function (err) {
        if(!err){
            console.log('数据库插入文档成功');
        }
    });
 */

/*
查询  第一参数查询条件 第二个投影（字符串 对象{age:1,name:0}）  第三个参数 回调
  find 返回的是一个数组
  findOne 返回一个具体对象

  StuModel.findOne({name:'swk'},"name age -_id",function (err,data) {
    if(!err){
        console.log(data);
    }
});

 */

/*StuModel.find({},"name age -_id",{limit:1,skip:2},function (err,data) {
    if(!err){
        console.log(data);
    }
});*/
// 修改 update updateOne updateMany
/*StuModel.updateMany({name:'swk'},{$set:{age:88}},function (err) {
    if(!err){
        console.log('修改成功');
    }
});*/
// 查找数量
StuModel.count({name:'swk'},function (err,count) {
    if(!err){
        console.log('一共有'+count);
    }
});