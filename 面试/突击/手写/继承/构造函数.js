function Parent(name='parent') {
    this.name = name
    this.parentvalue={
        a:2
    }
}
//显式的继承到了父类的属性,而且也能够传值
function Child(age =18,...args) {
    Parent.apply(this,args)
    this.age = age
}
const child = new Child(19,'child')
console.log(child);