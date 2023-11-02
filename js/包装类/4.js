function Person(){
    this.name=name
    this.age=age
    this.sex=sex
/*      生成对象this
    let this={
            name: name,
            age: age,
            sex: sex
    }
    return this */
     
}
let p=new Person('男',18,'boy')

console.log(p)

/* 模拟构造函数
function Person(name,age){
    var that={}
    that.name=name
    that.age=age
    return that
}
 */