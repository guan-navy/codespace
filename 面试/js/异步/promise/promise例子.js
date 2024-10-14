function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1)
        },1000)
        resolve('ok')
    })
}
function b(){
    setTimeout(()=>{
        console.log(2)
    },500)
}
a().then((res)=>{//resolve的值是被.then接受的
console.log(res);
b()
}).then((res)=>{//resolve
    
})

a().then(b)//语法是会触发掉()里面的函数