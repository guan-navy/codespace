"use strict";
console.log('第一条代码...');
class DateUtil1 {
    constructor() { }
    static getIntance() {
        if (!this.instance) {
            this.instance = new DateUtil1();
        }
        return this.instance;
    }
    formatDate() { }
    diffDateByDay() { }
    duffDateByHour() { }
    timeConversion() { }
}
DateUtil1.instance.formatDate();
