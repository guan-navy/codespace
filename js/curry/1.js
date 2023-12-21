function add(a,b,c){
    return a + b + c;
}
//函数的柯里化
function curry(fn){
    //通过闭包来实现,在函数执行的时候保存下执行的东西
    //通过闭包arr收集参数
    //到位了运行 arr.length === fn.length
    //返回收集参数的函数
    // rest运算符 args是在闭包空间的数组(也就是自由变量)
    let judge =(...args) =>{
        if(args.length==fn.length)return fn(...args);//退出条件
        //返回函数,继续收集参数
        return (...arg2) =>judge(...args,...arg2)

        
    }
    return judge
}
// 每次只接受一个参数
console.log(add.length);

const curryAdd = curry(add)

console.log(curryAdd(1)(2)(3));