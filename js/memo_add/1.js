

//用户的输入不确定性
function add(a,b){
    if(arguments.length!=2) {
        throw new Error('参数错误')
    }
    if(typeof a !='number'||typeof b !='number'){
        throw new Error('请传入整数')
    }
    return a + b
}
function memorize(fn){
    if(typeof fn !== 'function'){
        throw new Error('请传入函数')
    }

    var cache = {} //key:value o(1)空间换时间
    return function(fn){
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
//记忆功能
const memorizeAdd = memorize(add)
console.log(memorizeAdd(1,2));

