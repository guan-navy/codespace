//这份代码在js和有多线程的语言中执行结果不同
let a = 1
console.log(a);
setTimeout(()=>{
    console.log(a)
})
let b =2
for(let i;i<=1000000000000000000000;i++){
    if(i=1000000000000000000000){
        console.log(1);
    }
}