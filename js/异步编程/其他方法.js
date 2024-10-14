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
 catch(onRejected){
    if(typeof onRejected!=='function'){
        onRejected = err=>{throw err}
    }
    const thenPromise = new myPromise((resolve,reject)=>{
           
        const resolvePromise = (cb)=>{
            queueMicrotask(()=>{
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
 finally(onFinally){
return this.then(onFinally,onFinally)
 }
// 静态方法

// 如果有一个失败则失败
// 不是promise视为promise
// 所有的都成功则成功，返回结果数组
static all(promises){
const result = []
let count = 0
return new myPromise((resolve,reject)=>{
    const addData =(index,value)=>{
        result[index] = value
        count++
        if(count===promises.length){
            resolve(result)
        }
    }
    promises.forEach((promise,index)=>{
        if(promise instanceof myPromise){
            promise.then(value=>{
                addData(index,value)
            },reason=>{
                reject(reason)
            })
        }else{
            addData(index,promise)
        }
    })
})




}
// 一个成功就成功
// 全部失败才失败
// 返回第一个成功的结果
static any(promises){
    let count = 0
    return new myPromise((resolve,reject)=>{
        promises.forEach((promise)=>{
            if(promise instanceof myPromise){
                promise.then((res)=>{
                    resolve(res)
                },(err)=>{
                   count++
                   if(count===promises.length){
                    reject(new AggregateError('全部失败'))
                   }
                })
            }else{
                resolve(promise)
            }
            
        })
        
       
    })
}
// 谁先执行谁返回
static race(promises){

   
    return new myPromise((resolve,reject)=>{
       promises.forEach((promise)=>{
        if(promise instanceof myPromise){
            promise.then((res)=>{
                resolve(res)
            },(err)=>{
                reject(err)

            })
       }else{
        resolve(promise)
       }})
    })

}
static allSettled(promises){
    let count = 0
    const result =[]
    return new myPromise((resolve,reject)=>{
        const addData = (value,index)=>{
            count++
            result[index] =value
            if(count===promises.length){
                resolve(result)

            }
        }
        promises.forEach((promise,index)=>{
            if(promise instanceof myPromise){
                promise.then((res)=>{
                    addData(res,index)
                  },(err)=>{
                    addData(err,index)
                  })
            }else{
                addData(promise,index)
            }
        })
    })
}
static resolve(value){
    if(value instanceof myPromise){
        return value
    }
    return new myPromise(resolve=>resolve(value))

}
}
// all
const p1 = new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        // reject('失败1')
        resolve('成功1')
    },1000)
})
const p2 = new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        // reject('失败2')
        resolve('成功2')
    },2000)
})
const p3 = new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        reject('失败')
        resolve('成功3')
    },3)
})
// myPromise.all([1,p1,p2,p3]).then(res=>{
//     console.log(res);
// },err=>{
//     console.log(err);
// })
// myPromise.race([1,p1,p2,p3]).then(res=>{
//     console.log(res);
// },err=>{
//     console.log(err);
// })
// myPromise.any([1,p1,p2,p3]).then(res=>{
//     console.log(res);
// },err=>{
//     console.log(err);
// })
myPromise.allSettled([1,p1,p2,p3]).then(res=>{
    console.log(res);
},err=>{
    console.log(err);
})