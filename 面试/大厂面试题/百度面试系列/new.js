
// new 是干了啥操作
function myNew(Fn){
    let obj = {}
    obj._proto_=Fn.prototype
    Fn.call(obj)
    return obj
}
myNew(Person)