//call的实现原理是通过将函数放到目标对象上作为一个属性调用这样就改变了this的指向
Function.prototype.myapply =function(thisArg,args){
    // console.1og('myCa11执行啦')
    //2.设置this并调用原函数
    // thisArg 传入的设置为this的对象// this 原函数(原函数.myca11)
    const key = Symbol('key')
    thisArg[key]= this//当前是指向原型对象,但是在调用的时候会指向,调用的函数
    thisArg[key](...args)
    delete thisArg[key]
}
function fn(a,b,c){
    console.log(a,b,c);
    console.log(this.name,this.msg)
}

const a = {
    name:'a',
   msg:'hello'
}
const b = {
    name:'b',
    msg:'hello',
    fn
}


const arr = [1,2,3]
b.fn()
b.fn.myapply(a,arr)

