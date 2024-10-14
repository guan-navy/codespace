let obj ={
    a:1,
    b:0,
    c:{
        n:2
    }
}
Object
function hasProperty(obj, key){
    //Object.keys(obj)返回对象上的所有属性的数组,但是不能去判断不可枚举的属性
   Object.keys(obj).includes(key)
}
hasProperty(obj,'b')