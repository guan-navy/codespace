new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
    }, 1000);
}).then((res) => {
    console.log(res);
    return b
    
})
.then((res) => { console.log('这里是第二个then的执行结果',res);})

const b = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('hello 我是第一个then');
    }, 2000);
    
})