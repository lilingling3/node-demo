var fs = require('fs');

var fExit = fs.existsSync('hello.text');
// console.log(fExit);

fs.stat('hello.text',function (err,states) {
    if(!err){
        console.log(states.isFile());  // 返回文件所有状态
    }
});
// 读取文件夹
fs.readdir('.',function (err,files) {
    if(!err){
        console.log(files);
    }
});

fs.truncate('hello.text',5,function (err) {
    if(!err){
        console.log('截取成功');
    }
});

fs.watchFile('hello.text',{interval:1000},function (cur,pre) {
    console.log('当前文件大小'+ cur.size);
    console.log('之前文件大小'+ pre.size);
})
