"use strict";
let p1 = {
    name: "T-shirt",
    price: 500,
    discount: 10,
    buy() {
        console.log("buy");
    },
};
function getProduct(product) {
    console.log(product.a);
}
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
