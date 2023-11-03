//person.propotype 原型

Person.prototype.say=function() {
    return'hello'
}

//构造函数
function Person(){
 this.name='肖总'
 this.age=18
 this.say=function(){

 }
}
let p=new Person()
console.log(p)
//与属性值不同访问对象当中不存在的函数会报错
