require('../tools/connect_mongoose');
var item = require('../model/Item');

item.create({
    title:'吃饭',
    userId:'599ffb9bf34770164816e2ba' // objectId 类型
},function (err) {
    if(!err){
        console.log('插入成功');
    }
});