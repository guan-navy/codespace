
const { log } = require('console');
const fs = require('fs');
// fs.writeFileSync('./target.md','疑是地上霜')
const img = fs.readFileSync('./image.png')
console.log(img);
console.log(img.length);
console.log(img.toString());



//复制写入
fs.writeFileSync('./img(2).png',img)