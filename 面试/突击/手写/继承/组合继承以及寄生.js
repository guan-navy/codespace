function Parent(name='parent') {
    this.name = name
    this.parentvalue={
        a:2
    }
}
function Child(age,name) {
    Parent.call(this,name)
    this.age = age
}
//使用Object.create()创建一个空对象避免执行了内部的逻辑
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
const child = new Child(18,'child')
console.log(child);