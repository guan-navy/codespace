function readFileByPromise() {
    const fs = require('fs');
    return new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'UTF-8', ((err, data) => {
            if (err) {
                console.log('发生错误:' + err.message);
            }
            console.log(data);
        }))
        resolve();
    })
    .then((resolve, reject) =>{
        fs.readFile('./b.txt','UTF-8',((err,data2) =>{
            if(err) {
                console.log('发生错误:'+err.message)
                return
            }
            console.log(data2);
        }))
    })
    .then((resolve, reject) =>{
        fs.readFile('./c.txt','UTF-8',((err,data3) =>{
            if(err) {
                console.log('发生错误:'+err.message)
                return
            }
            console.log(data3);
        }))
    })
}
readFileByPromise()