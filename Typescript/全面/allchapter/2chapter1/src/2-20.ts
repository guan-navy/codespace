{
    function info(message: string): void {
        
        console.log(message);
    }
    info('')
    let fn = function (n: number): void {
        console.log(n)
    }
    fn(1)
//这样写的话呢右边的函数类型就有了约束
    let fn1:(n: number)=>void = function (n: number): void {
        console.log(n)
    }
    fn1(1)
//改进写法
type TypeInfoFun = (name:string,age:number)=>number
let info1:TypeInfoFun = function (name:string,age:number):number {
    console.log(name,age);
    return age
}
console.log(info1('',18));
    

// rest 参数
// 可以设置后续的参数
function fn2(name:string,...rest:any):void{
  
    console.log(name,rest)
}
fn2('',1,2,3,4)
}
