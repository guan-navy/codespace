"use strict";
var Subject = (function () {
    function Subject(subid, subname) {
        this.subid = subid;
        this.subname = subname;
    }
    return Subject;
}());
var chineseSubject = new Subject(100, "语文");
var mathSubject = new Subject(101, "数学");
var englishSubject = new Subject(102, "英语");
var setZhangSanSubject = new Set([chineseSubject, mathSubject, englishSubject]);
