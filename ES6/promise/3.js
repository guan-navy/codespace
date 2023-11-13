function a (){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('a');   
            resolve()
            // reject('错误');
           }, 1000);
           
    })
    
}

function b(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('b');   
            resolve()
           }, 500);
          
    })
   
}

function c (){
    console.log('c');
}
//all必须要接受到的所有的proise状态均为resolve,then才会调用
//all保证了函数c在函数a,b之后触发,而且里面必须要返回promise对象的能力

//.then()会触发掉传入内部的实参
// Promise.all([a(),b()]).then(c)
//then要执行的话前面对象不能调用reject
// catch会接受reject传入的参数



//竞速
Promise.race([a(),b()])
.then(c)
// .catch((err) =>{
// console.log(err);
// })
