function *gen(){
    const  num1 = yield fn(1)
    console.log(num1)
    const num2 = yield fn(num1)
    console.log(num2)
    return 3

}
function fn(num){
    return(num*2);
    
}
const g = gen()
console.log(g.next());
// {value:undefined,done:false}
// 2
console.log(g.next(4));
// 不给赋值就是undeinfed

console.log(g.next());
