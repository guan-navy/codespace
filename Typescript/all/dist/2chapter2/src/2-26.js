"use strict";
{
    let customers = ["Tom", 18];
    customers = ["Tom", 18, "Male", 1];
    let [name, age, ...rest] = customers;
    console.log(name, age, rest);
}
