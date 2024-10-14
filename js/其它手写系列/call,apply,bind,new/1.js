//  call 实现
// 原理通过对象调用函数改变this的指向
//  1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
//  2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
//  3.处理传入的参数，截取第一个参数后的所有参数。
Function.prototype.myCall = function (context,...args) {
    //  判断调用对象是否为函数,因为原型链的原因，普通对象看也会调用到

  if (typeof this!== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  const fnSym = Symbol()
  context[fnSym] = this
  const  res = context[fnSym](...args)

 
  delete context[fnSym]
  return res
}
function test(a,b,c) {
  console.log(this);
  console.log(this.a)
  console.log(a,b,c);
  
}
// test.myCall({a:1})
//  apply 实现 参数变成数组
Function.prototype.myApply= function(context,args){
    if(typeof this!=='function'){
        throw new TypeError('not a function')
    }
    context = context || window
    let fnSym = Symbol()

    context[fnSym] = this
    const res = context[fnSym](...args)
    delete context[fnSym]
    return res

}
// .myApply({a:1},[1,2,3])
//  bind 的实现 bind返回的函数new 出来也会改变this的指向

Function.prototype.myBind = function (context,...args) {
    if (typeof this!== 'function') {
        throw new TypeError('not a function')
    }
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    
    var fNOP = function () {};

    var   fBound =function (...fnArgs) {
       
        return self.apply(context, args.concat(fnArgs));

    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP()
    return fBound
}
