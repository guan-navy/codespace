const fs = require('fs');
const info = fs.statSync('./target.md');//生成一个当前文件状态对象
console.log(fs.isDirectory('./pic'));
console.log(fs.isFile('./pic'));
