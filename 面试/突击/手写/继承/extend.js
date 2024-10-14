class Parent {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Child extends Parent{
    constructor(name) {
        super(name) // super让子类传参给父类
        this.age = 18
    }
}

let child = new Child('Tom')
console.log(child.name); // Tom

//通过使用super关键字，可以调用父类的构造函数，并且可以给父类传参。