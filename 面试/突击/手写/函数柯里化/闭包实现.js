function fn(a,b,c){
    return a+b+c
}

function curry(fn){
    let currify =(...args1)=>{
        if(args1.length===fn.length){
            return fn(...args1)
        }
        return (...args2)=>currify(...args1,...args2)//将原来已有的参数,和新传入的参数,一起传入至函数中
    }
    return currify
}

console.log(curry(fn)(1)(2)(3));
//闭包的清除