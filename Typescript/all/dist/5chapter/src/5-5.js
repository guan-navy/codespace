"use strict";
var Customer = (function () {
    function Customer() {
    }
    Customer.prototype.buy = function () { };
    return Customer;
}());
console.log(Object.prototype.toString.call(Customer).slice(8, -1));
var cust = new Customer();
console.log(Object.prototype.toString.call(cust).slice(8, -1));
