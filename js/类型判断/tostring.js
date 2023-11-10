console.log(
    //完美判断所有类型并返回'[Object类型名]'
    Object.prototype.toString.call()
)
let obj={}
let str=Object.prototype.toString.call(obj)
console.log(str.slice(8,-1))//最后一个位置不包括