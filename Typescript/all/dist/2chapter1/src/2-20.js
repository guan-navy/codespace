"use strict";
function info(message) {
    console.log(message);
}
info('');
var fn220 = function (n) {
    console.log(n);
};
fn(1);
var fn2201 = function (n) {
    console.log(n);
};
fn2201(1);
var info1 = function (name, age) {
    console.log(name, age);
    return age;
};
console.log(info1('', 18));
function fn2(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(name, rest);
}
fn2('', 1, 2, 3, 4);
