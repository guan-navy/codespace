// 工厂模式
// 没有利用原型，不能共享
function createCar(color,brand){
    var obj = new Object()
    obj.color = color
    obj.brand = brand
    return obj
}

// 构造函数
// 有些属性会重复创建，浪费内存
function Car(color,brand){
    this.color = color
    this.brand = brand
}
// 原型|原型链
Car.prototype.run = function(){
    console.log('run')
}
// 组合模式
// 构造函数和原型链结合，解决了重复创建属性的问题
function Car(color,brand){
    this.color = color
    this.brand = brand
}
Car.prototype = {
    run:function(){
        console.log('run')
    }
}