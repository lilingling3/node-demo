var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list',{useMongoClient: true});
mongoose.connection.once('open', function (callback) {
    console.log('数据库连接上了');
});