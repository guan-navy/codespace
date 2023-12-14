//使用Node内置的模块 fs
const fs = require('fs');
const path  = require('path');
fs.readFile('./a.txt','UTF-8',((err,data) =>{
    if(err) {
        console.log('发生错误:'+err.message);
    }
    console.log(data);
    fs.readFile('./b.txt','UTF-8',((err,data2) =>{
        if(err) {
            console.log('发生错误:'+err.message)
            return
        }
        console.log(data2);
        fs.readFile('./c.txt','UTF-8',((err,data3) =>{
            if(err) {
                console.log('发生错误:'+err.message)
                return
            }
            console.log(data3);
        }))
    }))
}))
