"use strict";
console.log('第一条代码...');
var DateUtil1 = (function () {
    function DateUtil1() {
    }
    DateUtil1.getIntance = function () {
        if (!this.instance) {
            this.instance = new DateUtil1();
        }
        return this.instance;
    };
    DateUtil1.prototype.formatDate = function () { };
    DateUtil1.prototype.diffDateByDay = function () { };
    DateUtil1.prototype.duffDateByHour = function () { };
    DateUtil1.prototype.timeConversion = function () { };
    return DateUtil1;
}());
DateUtil1.instance.formatDate();
