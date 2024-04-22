"use strict";
// undefined 和 null 的细节
//在ts当中使用一个没有初始化的变量会报错的
//但是如果将类型增加undefined的话，就不会报错了
{
    let a;
    console.log(a);
}
