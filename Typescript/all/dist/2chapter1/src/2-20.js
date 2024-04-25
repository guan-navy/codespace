"use strict";
{
    function info(message) {
        console.log(message);
    }
    info('');
    let fn = function (n) {
        console.log(n);
    };
    fn(1);
    let fn1 = function (n) {
        console.log(n);
    };
    fn1(1);
    let info1 = function (name, age) {
        console.log(name, age);
        return age;
    };
    console.log(info1('', 18));
    function fn2(name, ...rest) {
        console.log(name, rest);
    }
    fn2('', 1, 2, 3, 4);
}
