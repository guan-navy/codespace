const fs = require('fs');

//区别与writeFile,是在原有的基础上增加内容
// fs.appendFileSync('./data.txt','疑是地上霜')

//改变文件夹的名字,也能改变路径
// fs.renameSync('./data.txt','./pic/data.txt')

// fs.unlinkSync('./pic/test.txt')


//删除目录
fs.rmSync('./pic/test',{recursive:true})