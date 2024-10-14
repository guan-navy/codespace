// 寄生组合式继承
// 1. 借用构造函数对象上继承属性
// 2. 借用原型对象上继承方法
// 3. 修正构造函数指向
function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
function parent(name) {
    this.name = name;
    this.info = 'parentInfo'
}
function child(name) {
    parent.call(this,name);
    this.age = 18;
}
inheritPrototype(child, parent);
var c = new child('childName');
console.log(c);