"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateUtil {
    static formatDate() {
    }
    static diffDateByDay() { } //两个日期之间的天数差
    static duffDateByHour() { } //两个日期之间的小时差
    static timeConversion() { }
}
exports.default = DateUtil;
//但是如果我只需要某一个方法
//如果实例化的对象的话，就引入了所有的方法
//解决方法就是将其改为静态方法
DateUtil.formatDate();
