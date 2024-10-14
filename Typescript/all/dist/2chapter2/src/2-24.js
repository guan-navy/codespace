"use strict";
function fn224(stuObj) {
    console.log(stuObj.usernanme, stuObj.age);
}
function fn2241(_a) {
    var usernanme = _a.usernanme, age = _a.age;
    console.log(usernanme, age);
}
fn224({ usernanme: 'zhangsan', age: 18 });
fn2241({ age: 18, usernanme: 'zhangsan' });
