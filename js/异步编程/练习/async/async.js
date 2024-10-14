function *gen(){

    const num1 = yield fn()
    console.log(num1)
    const num2 = yield fn(num1)
    console.log(num2)
    return 3
}
function fn(num=1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num*2)
        },1000)
    })
}
function genToAsync(gen){
return function(){
    return new Promise((resolve,reject)=>{
        const g= gen.apply(this,arguments)
        function go(key,arg){
            let res
            try{
                // 这里的arg会给到上一个的yield
                res = g[key](arg)
                console.log(res);
                
                const {value,done} = res
                if(done){
                    resolve(value)
                }else{
                    return Promise.resolve(value).then(val=>{
                        // 把执行promise得到的结果赋值
                        go('next',val)
                    },err=>{
                        go('throw',err)

                    })
                }
            }catch(err){
                reject(err)
            }
        }
        go('next')
    })
}
}
//  测试
const genToAsyncFn = genToAsync(gen)
const asyncRes = genToAsyncFn()
asyncRes.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})
