const fn=(num) => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(num*2)
    },1000)
})
function* gen() {
    const num1 = yield fn(1)

    console.log(num1)
   const err = yield (()=>{
    throw new Error('出错了')

   })()
    const num2 = yield fn(num1)
    console.log(num2)
    return 3
}
function generatorToAsync(gen){
    return function(){
       return new Promise((resolve,reject)=>{
           const g = gen.apply(this,arguments)

           function go(key,arg){
            let res 
            try {
                 res  = g[key](arg)
                 const {value,done} = res
            if(done){
                resolve(value)
            }else{
                    return Promise.resolve(value).then(val=>{
                        go('next',val)
                    },err=>{
                        go('throw',err)
                    })
            }
            } catch (error) {
                // 出错直接终止
                reject(error)
            }
            
            
           }
           go('next')
       })
       
       

    }

}

const genToAsync =  generatorToAsync(gen)
const asyncRes = genToAsync()
asyncRes.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})