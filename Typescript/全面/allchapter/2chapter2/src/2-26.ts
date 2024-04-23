
{
//可变元组,...any[]
//会将后面的所有的值组装成为一个数组和前面的类型匹配
let customers: [string, number,...any[]] = ["Tom", 18];
customers = ["Tom", 18, "Male", 1];
//可变元组解构
let [name, age, ...rest] = customers;
console.log(name, age, rest);

}