//记忆函数, 闭包高级功能
function memoize(fn){
    if(typeof fn !== 'function'){
        throw new Error('请传入函数')
    }

    var cache = {} //key:value o(1)空间换时间
    return function(){
        //唯一性
        var key = arguments.length + 
        Array.prototype.join.call(arguments,",")//伪数组没有数组对应的方法,call将方法里的this指向arguments借用了一下方法
        console.log(key);

        if(key in cache){
            return cache[key]
        } else {
            return cache[key] = fn.apply(this, arguments)
        }
    }
}
//commonjs 模块化方案
module.exports = memoize