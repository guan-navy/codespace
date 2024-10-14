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
        this.PromiseState =  'pengding'
        this.PromiseResult = null
        //链式调用的回调函数存储
        this.onFulfilledCallbacks = []
        this.onrejectedCallbacks = []


    }

    initBind(){
       this.resolve =  this.resolve.bind(this)
       this.reject =  this.reject.bind(this)

    }
    resolve(value){
        if(this.PromiseState!=='pengding')return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = value

        while(this.onFulfilledCallbacks.length){
            this.onFulfilledCallbacks.shift()(value)
        }


    }
    reject(reason){
        if(this.PromiseState!=='pengding') return
        this.PromiseState ='rejected'
        this.PromiseResult = reason

        while(this.onrejectedCallbacks.length){
            this.onrejectedCallbacks.shift()(reason)
        }
        

    }
    then(onFulfilled,onRejected){
        if(this.PromiseState==='fulfilled'){
            onFulfilled(this.PromiseResult)
        }
        if(this.PromiseState==='rejected'){
            onRejected(this.PromiseResult)

        }
        if(this.PromiseState==='pengding'){
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onrejectedCallbacks.push(onRejected)

    }

}
}
const p = new myPromise((resolve,reject)=>{
    resolve('成功')
    reject('失败')
})
console.log(p);

const p1 = new myPromise((resolve,reject)=>{
   
    reject('失败')
    resolve('成功')
})
console.log(p1);
const err = new myPromise((resolve,reject)=>{
        throw new Error('失败')
})
console.log(err);
