class Customer{
    custname
    buy(){}
}
console.log(Object.prototype.toString.call(Customer).slice(8,-1));
let cust = new Customer();
console.log(Object.prototype.toString.call(cust).slice(8,-1));

//只是得到字符串并没有判断类型
// instanceof方法的话呢更加准确