"use strict";
{
    let data = new Set();
    // data = null
    // data = undefined
    function test(data) {
        while (true) { }
    }
    data = test;
    let data1 = '123';
    data1 = 123;
    // data1 = '123'
    console.log(data1);
    let obj = {
        name: '123',
        age: 123
    };
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
