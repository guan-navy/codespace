const fs = require('fs');

async function readFiles() {
    try {
        const data1 = await readFilePromise('./a.txt');
        console.log(data1);
        
        const data2 = await readFilePromise('./b.txt');
        console.log(data2);
        
        const data3 = await readFilePromise('./c.txt');
        console.log(data3);
    } catch (error) {
        console.error('发生错误:', error.message);
    }
}

function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'UTF-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFiles();