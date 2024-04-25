console.log('第一条代码...');
class DateUtil1 {
    constructor() {
        console.log("创建日期工具类...");
    }
    formatDate() { }
    diffDateByDay() { }
    duffDateByHour() { }
    timeConversion() { }
}
DateUtil1.instance = new DateUtil1();
export default DateUtil1;
DateUtil1.instance.formatDate();
