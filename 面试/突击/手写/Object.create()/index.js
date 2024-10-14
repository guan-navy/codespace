//创建一个空白对象,然后其原型被规定为传入对象
Object.prototype.myCreate=function(_proto_){
    const  newObj =  new Object()
    //设置对象的隐式原型
    Object.setPrototypeOf(newObj,_proto_)
    return newObj
}
console.log(Object.myCreate({}));

