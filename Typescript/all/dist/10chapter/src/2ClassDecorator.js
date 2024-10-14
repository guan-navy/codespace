var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function FirstDecorator(params) {
    console.log("params", params);
    return function (target) {
        console.log(target.prototype.constructor.name);
        Object.keys(target.prototype).forEach(function (key) {
            console.log(key);
        });
        var targetObj = new target();
        console.log("target", targetObj.name);
        console.log('你好');
        targetObj.buy();
        console.log("target", target);
    };
}
var CustomerService = (function () {
    function CustomerService() {
        this.name = "下单";
        console.log("构造函数执行");
    }
    CustomerService.prototype.buy = function () {
        console.log("购买");
    };
    CustomerService.prototype.placeOrder = function () {
        console.log("下单");
    };
    CustomerService = __decorate([
        FirstDecorator("参数"),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
var customerService = new CustomerService();
console.log(customerService.name);
export {};
