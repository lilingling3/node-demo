var fs = require('fs');
// 打开文件
fs.open('hello1.text','w',function (err,fd) {
    // node 特点 错误优先
    if(!err){
        // console.log(fd); 写文件
        fs.write(fd,'异步写入内容',function (err) {
            if(!err){
                console.log('写入成功');
            }
            
            fs.close(fd,function (err) {
                if(!err){
                    console.log('关闭文件');
                }
            })
        })



    }
});