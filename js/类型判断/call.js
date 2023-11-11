var obj ={
    a:1
}
function foo(c,b){
    console.log(c+b)
    console.log(this.a);
}
//call 的原理
/*  Function.prototype.myCall = function(context){
    if(! this instanceof Function){
        // typeof this !== 'function'

    }
    context.fn=this
    context.fn()//触发隐式绑定规则
    delete context.fn//删除这个多余添加的属性
 }
 foo.call(obj) */


//有的细节
Function.prototype.myCall = function(context){
    if(! this instanceof Function){
        // typeof this !== 'function'

    }
    let args=Array.from(arguments).slice(1)//获取call传入的其它参数,将类数组转化伪数组才可以使用slice方法
    //let args=[...arguments]
    context.fn=this
    let res=context.fn(...args)//触发隐式绑定规则
    delete context.fn//删除这个多余添加的属性
    return res//加上访问值
 }
 foo.call(obj,1,2,3)

