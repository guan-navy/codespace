// promise then 实现
class myPromise {
    constructor(executor){
        this.initValue()
        this.initBind()
        try {
            executor(this.resolve,this.reject)

        } catch (error) {
            this.reject(error)
        }

    }
    initValue(){
        this.PromiseState =  'pending'
        this.PromiseResult = null
        //链式调用的回调函数存储
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []


    }

    initBind(){
       this.resolve =  this.resolve.bind(this)
       this.reject =  this.reject.bind(this)

    }
    resolve(value){
        if(this.PromiseState!=='pending')return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = value

        while(this.onFulfilledCallbacks.length){
            this.onFulfilledCallbacks.shift()(value)
        }


    }
    reject(reason){
        if(this.PromiseState!=='pending') return
        this.PromiseState ='rejected'
        this.PromiseResult = reason

        while(this.onRejectedCallbacks.length){
            this.onRejectedCallbacks.shift()(reason)
        }
        

    }
    then(onFulfilled,onRejected){
        if(typeof onFulfilled!=='function'){
            onFulfilled = val=>val
        }
        if(typeof onRejected!=='function'){
            onRejected = err=>{throw err}
        }
        const thenPromise = new myPromise((resolve,reject)=>{
           
                    const resolvePromise = (cb)=>{
                        setTimeout(()=>{
                            try{
                                const x = cb(this.PromiseResult)
                               if(x ===thenPromise){
                                throw new Error('不能返回自身')
                               }
                               if(x instanceof myPromise){
                                x.then(resolve,reject)
                               }else{
                                resolve(x)
                               }
                            }catch(e){
                                reject(e)
                            }
                        })
                        
                    }
                    if(this.PromiseState==='fulfilled'){
                        resolvePromise(onFulfilled) 
                    }
                    if(this.PromiseState==='rejected'){
                        resolvePromise(onRejected)  
                       
                    }
                    if(this.PromiseState==='pending'){
                        this.onFulfilledCallbacks.push(resolvePromise.bind(this,onFulfilled))
                        this.onRejectedCallbacks.push(resolvePromise.bind(this,onRejected))
                }
                })
return thenPromise

}
}

const p2 = new myPromise((resolve,reject)=>{
    resolve('成功')
  
})
// console.log(p2);
p2.then(res=>{
    console.log(res);
})


p2.then(res=>{
    console.log(res);
    return p2
}).then(res=>{
    throw new Error('失败')
}).then(res=>{
    console.log(res);
},(err)=>{
   return new myPromise((resolve,reject)=>{
    setTimeout(()=>{ resolve('失败转成功')},1000)
  
   
   })
    
}).then(res=>{
   setTimeout(()=>{
    console.log(res);
   },1000)

},(err)=>{
    console.log(`失败了${err}`)

}).then(res=>{
 console.log('最后');
 
})

