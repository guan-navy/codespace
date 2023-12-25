const path = require('path');

// console.log(path.join('a', 'b', 'c'));
// console.log(path.join(process.cwd(), 'index'));
//拼接路径到当前文件夹的绝对路径下面
// console.log(path.resolve('a', 'b', 'c'));

//返回路径的目录名
// console.log(path.dirname(process.cwd()));

// console.log(path.basename('a/c/c.js'));


//读取到当前的运行的文件路径,第二个参数使返回的文本去掉后缀名
// console.log(path.basename(__filename,'.js'));

//返回后缀名
// console.log(path.extname(__filename));


//将路径格式化成标准路径
// console.log(path.normalize(__filename));


//返回一个路径对象
// console.log(path.parse(__filename))

//
console.log('foo\\bar\\baz'.split(path.sep));
