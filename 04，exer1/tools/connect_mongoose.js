//该模块用于数据库连接
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/exer01',{useMongoClient: true});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function (callback) {
    console.log('数据库连接上了');
});
// mongoose.disconnect(); 数据库
// mongoose.connection.once('close', function (callback) {
//     console.log('数据库连接上了');
// });
