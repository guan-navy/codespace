"use strict";
{
    function fn(stuObj) {
        console.log(stuObj.usernanme, stuObj.age);
    }
    function fn1({ usernanme, age }) {
        console.log(usernanme, age);
    }
    fn({ usernanme: 'zhangsan', age: 18 });
    fn1({ age: 18, usernanme: 'zhangsan' });
}
