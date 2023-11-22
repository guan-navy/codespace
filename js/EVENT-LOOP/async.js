function A(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('异步A完成');
            resolve();
         },1000)
    })

}
function B(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('异步B完成');
            resolve();
        }, 500);
    })
   
}
function C(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('异步c完成')
        },1000)
    })
  
}
//加了async相等于return 了promise对象
async function foo(){
    await A() //await后续代码的执行,将后续代码推入到微任务队列当中
    console.log(1);
    await B()
    await C()
}
foo()