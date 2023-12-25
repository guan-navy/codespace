const fs = require('fs')



//创建多层级目录,第二个参数表示包含内容
// fs.mkdirSync('./test-dir/data/list',{ recursive:true})

//删除目录,第二个参数表示包含内容,就删除文件包括文件里面的内容
// fs.rmdirSync('./test-dir',{ recursive:true})



//监听当前文件的变更
fs.watch('./',{ recursive:true},(eventType,filename)=>{
    console.log(`当前文件夹下${filename}文件变更:${eventType}`);
})