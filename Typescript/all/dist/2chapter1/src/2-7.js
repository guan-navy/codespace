"use strict";
var data = new Set();
console.log(data);
function test() {
    while (true) { }
}
data = test;
var data1 = '123';
data1 = 123;
console.log(data1);
var obj27 = {
    name: '123',
    age: 123
};
console.log(obj27);
function isStartUp(increase) {
    if (increase) {
        return 1;
    }
    else {
        return 2;
    }
}
isStartUp(2);
