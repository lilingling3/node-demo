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
// 数据库中获取到的数据都是document 是model 的实例
// StuModel.findOne({name:'swk'},function (err, data) {
//     if(!err){
//         console.log(data instanceof StuModel); // ture
//     }
// });

// 创建document对象
// var stu = new StuModel({
//     name:'ts',  // 会尝试做类型转换
//     age:22,
//     gender:'男'
// });
/*
save() 将一个文档对象插入到数据库
id 查询id
doc.get('age') 查询字段的值
doc.update
remove() 删除
isNew() 是否新创建
ifInit() 文档中属性是否初始化
toJson() 文档对象转化为json
toObject() document对象 转化为普通对象 不在能操作数据库



* */
// stu.save(function (err) {
//     if(!err){
//         console.log('存入成功');
//     }
// });

StuModel.findOne({name:'ts'},function (err,doc) {
    if(!err){
        console.log(doc);
        // console.log(doc.id);
        // console.log(doc.get('age'));
       /* doc.update({$set:{age:55}},function (err) {
            if(!err){
                console.log('修改成功');
            }
        })*/
       // var doc = doc.toObject();
       // delete doc.name; // 使用普通对象的方法
       // console.log(doc);
    }
});
