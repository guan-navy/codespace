function myNew(constructor, ...args) {
  //1.创建一个空白对象
  //2.将对象的隐式原型指向构造函数的显式原型,将对象原型上constructor属性赋值为构造函数
  //3.将构造函数的this指向新创建的空白对象
  //4.执行构造函数中的逻辑
  //5.判断返回值是不是对象如果是对象的话返回这个对象，否则返回新创建的空白对象

  //1和2合并
  const newObj = Object.create(constructor.prototype);
  newObj.__proto__.constructor = constructor;
  //3,4
  const res = constructor.apply(newObj, args);
  //5
  return res instanceof Object ? res : newObj;
  
}
function fn(a,b){
    this.a = [a,b]
    this.b = 12
}
console.log(myNew(fn,1,2));
