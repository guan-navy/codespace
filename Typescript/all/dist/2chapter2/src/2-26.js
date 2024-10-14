"use strict";
{
    var customers = ["Tom", 18];
    customers = ["Tom", 18, "Male", 1];
    var name_1 = customers[0], age = customers[1], rest = customers.slice(2);
    console.log(name_1, age, rest);
}
