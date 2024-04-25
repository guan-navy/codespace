"use strict";
{
    let a;
    console.log(a);
    function fn(a) {
        console.log(a);
    }
    function fn1(a) {
        console.log(a);
    }
    function fn2(a) {
        a.toString();
        if (a) {
            a.toString();
        }
    }
    fn();
    fn1(1);
    fn2();
}
