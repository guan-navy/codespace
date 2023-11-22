console.log('start');
setTimeout(()=>{
    console.log('setTimeout');
    setTimeout(()=>{
        console.log('inner');
    })
    console.log('end');
},1000)
new Promise((resolve, reject)=>{
    console.log('promise');
    resolve()
})
.then(()=>{
    console.log('then1');
})
.then(()=>{
    console.log('then2');
})