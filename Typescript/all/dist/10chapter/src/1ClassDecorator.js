"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    //第一个参数是装饰器数组,第二个是被装饰的对象,第三个是属性名,第四个是属性描述符
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
function FirstDecorator(target) {
  console.log(target.prototype.constructor.name);
  Object.keys(target.prototype).forEach(function (key) {
    console.log(key);
  });
  var targetObj = new target();
  console.log("target", targetObj.name);
  console.log("你好");
  targetObj.buy();
  console.log("target", target);
}
var CustomerService = (function () {
  function CustomerService() {
    this.name = "下单";
    console.log("构造函数执行");
  }
  //原来方法都是放在原型上
  CustomerService.prototype.buy = function () {
    console.log("购买");
  };
  CustomerService.prototype.placeOrder = function () {
    console.log("下单");
  };
  CustomerService = __decorate(
    //第一个参数是数组,因为可能有多个装饰器
    [FirstDecorator, __metadata("design:paramtypes", [])],
    CustomerService
  );
  return CustomerService;
})();
