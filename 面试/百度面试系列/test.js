Promise.resolve().then((res)=>{
console.log('第一个then');
}).then((res)=>{
    console.log('第二个then');
}).catch((err)=>{
    console.log('catch');
})
