"use strict";
var p1 = {
    name: "T-shirt",
    price: 500,
    discount: 10,
    buy: function () {
        console.log("buy");
    },
};
function getProduct(product) {
    console.log(product.a);
}
var MyDog = (function () {
    function MyDog(name, age) {
        this.name = name;
        this.age = age;
    }
    MyDog.prototype.bark = function () {
        throw new Error("Method not implemented.");
    };
    MyDog.prototype.toHealth = function () {
        throw new Error("Method not implemented.");
    };
    return MyDog;
}());
