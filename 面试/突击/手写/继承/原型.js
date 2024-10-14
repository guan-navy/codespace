function Parent(name='parent') {
    this.name = name
    this.parentvalue={
        a:2
    }
}
function Child(age =18) {
    this.age = age
}
//更改对象的隐式原型,继承父类原型上的属性
Child.prototype = new Parent()
//缺点:继承到的属性在原型上,而原型的话有一个问题只能更改原型上面引用类型的,并不能修改原型上面的原始类型,而且并不能传值
const child = new Child()
child['name'] = 'child'
child.parentvalue.a = 3
console.log(child,child.parentvalue.a,child.__proto__);
