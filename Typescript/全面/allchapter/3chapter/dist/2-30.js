"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//单例模式：1. 在类当中定义一个静态属性，这个属性指向实例对象，这个类的构造函数私有化
class DateUtil1 {
    //日期工具类
    constructor() {
        console.log("创建日期工具类...");
    }
    formatDate() { }
    diffDateByDay() { } //两个日期之间的天数差
    duffDateByHour() { } //两个日期之间的小时差
    timeConversion() { }
}
//立即创建单例模式
DateUtil1.instance = new DateUtil1();
exports.default = DateUtil1;
console.log('第一条代码...');
//但是如果我只需要某一个方法
//如果实例化的对象的话，就引入了所有的方法
//解决方法就是将其改为静态方法
DateUtil1.instance.formatDate();
