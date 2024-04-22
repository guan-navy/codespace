"use strict";
let p = {
    name: "T-shirt",
    price: 500,
    discount: 10,
    buy() {
        console.log("buy");
    },
};
//提供接口,在函数中对于自定义的对象类型进行处理,参数的类型需要写成接口或者是type
function getProduct(product) {
    console.log(product.a);
}
//一个接口可以衍生出非常多的,接口可以为这些类的共同的方法统一方法命名
//也就是需要去实现这些接口定义不然会编译器报错
//就像说明书和目录一样,方便维护
class MyDog {
    bark() {
        throw new Error("Method not implemented.");
    }
    toHealth() {
        throw new Error("Method not implemented.");
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
