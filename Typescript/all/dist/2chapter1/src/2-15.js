"use strict";
var _a;
{
    var myAny = {};
    var p15 = (_a = {
            name: '张三',
            age: 18,
            sex: '男',
            1: '1',
            true: ''
        },
        _a[''] = '1',
        _a[123] = '1',
        _a[myAny] = '1',
        _a[Symbol('123')] = '1',
        _a);
    console.log(p15);
}
