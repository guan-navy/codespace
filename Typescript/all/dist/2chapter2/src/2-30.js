console.log('第一条代码...');
var DateUtil1 = (function () {
    function DateUtil1() {
        console.log("创建日期工具类...");
    }
    DateUtil1.prototype.formatDate = function () { };
    DateUtil1.prototype.diffDateByDay = function () { };
    DateUtil1.prototype.duffDateByHour = function () { };
    DateUtil1.prototype.timeConversion = function () { };
    DateUtil1.instance = new DateUtil1();
    return DateUtil1;
}());
export default DateUtil1;
DateUtil1.instance.formatDate();
