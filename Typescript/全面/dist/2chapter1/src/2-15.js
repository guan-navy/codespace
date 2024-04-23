"use strict";
{
    let myAny = {};
    let p15 = {
        name: '张三',
        age: 18,
        sex: '男',
        1: '1',
        true: '',
        ['']: '1',
        [123]: '1',
        [myAny]: '1',
        [Symbol('123')]: '1',
    };
    console.log(p15);
}
