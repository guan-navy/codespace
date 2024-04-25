"use strict";
var week;
(function (week) {
    week[week["sunday"] = 1] = "sunday";
    week[week["monday"] = 2] = "monday";
    week[week["tuesday"] = 3] = "tuesday";
    week[week["wednesday"] = 4] = "wednesday";
    week[week["thursday"] = 5] = "thursday";
    week[week["friday"] = 6] = "friday";
    week[week["saturday"] = 7] = "saturday";
})(week || (week = {}));
var weekCn;
(function (weekCn) {
    weekCn["sunday"] = "\u661F\u671F\u5929";
    weekCn["monday"] = "\u661F\u671F\u4E00";
    weekCn["tuesday"] = "\u661F\u671F\u4E8C";
    weekCn["wednesday"] = "\u661F\u671F\u4E09";
    weekCn["thursday"] = "\u661F\u671F\u56DB";
    weekCn["friday"] = "\u661F\u671F\u4E94";
    weekCn["saturday"] = "\u661F\u671F\u516D";
})(weekCn || (weekCn = {}));
console.log(week.sunday);
console.log(week['monday']);
console.log(week[2]);
console.log(weekCn.sunday);
console.log(weekCn['monday']);
