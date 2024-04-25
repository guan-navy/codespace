"use strict";
class Customer {
    buy() { }
}
console.log(Object.prototype.toString.call(Customer).slice(8, -1));
let cust = new Customer();
console.log(Object.prototype.toString.call(cust).slice(8, -1));
