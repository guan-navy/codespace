// 指定参数数量，到达数量之后就可以执行
// 使用apply来指定this的指向
// 普通函数的当中的this的指向是根据函数的调用情况来的
// 
function currify(fn,argsNum){
return function curried(...args){
    if(args.length==argsNum){
        fn.apply(this,args)
    }else{
        return function(...nextArgs){
            return curried.apply(this,args.concat(nextArgs))
        }
    }
}
}
function test(a,b,c,d){
    console.log(a+b+c)
    console.log(d);
    
}
const a = currify(test,4)
a(1)(2)(3)(4)