// 

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('a');
  }, 1000);
});
a.then((res)=> {
    // return 'b'
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
            
    //     }, 1000);
    // })
    setTimeout(()=>{
        console.log(res);
        return 'c';
    },1000);
}).then((res)=> {
    
    console.log('end',res);
},(err)=>{
    console.log('err',err);
})

//也就是then会默认返回一个promise，如果返回一个promise，那么这个promise会替代掉promise链中的上一个promise

//promise的基本使用

