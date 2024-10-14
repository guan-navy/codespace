function myInstanceOf(obj, constructor) {
  // 对象的隐式原型或者原型链上===构造函数的原型

  let prototype = Object.getPrototypeOf(obj);
  while (prototype) {
    if (prototype === constructor.prototype) return true;
    prototype =  Object.getPrototypeOf(prototype);
  }
  return false;
}
console.log(myInstanceOf([1, 2], Object));
