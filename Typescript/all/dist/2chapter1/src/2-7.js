"use strict";
{
    let data = new Set();
    console.log(data);
    function test() {
        while (true) { }
    }
    data = test;
    let data1 = '123';
    data1 = 123;
    console.log(data1);
    let obj = {
        name: '123',
        age: 123
    };
    console.log(obj);
    function isStartUp(increase) {
        if (increase) {
            return 1;
        }
        else {
            return 2;
        }
    }
    isStartUp(2);
}
