"use strict";
// 函数参数的解构
{
    function fn(stuObj) {
        console.log(stuObj.usernanme, stuObj.age);
    }
    //解构的写法,我并不需要获取整个的一个对象
    function fn1({ usernanme, age }) {
        console.log(usernanme, age);
    }
}
