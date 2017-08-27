var  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_test');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function (callback) {
    console.log('数据库连接上了');
});
// mongoose.disconnect(); 数据库
mongoose.connection.once('close', function (callback) {
    console.log('数据库连接上了');
});