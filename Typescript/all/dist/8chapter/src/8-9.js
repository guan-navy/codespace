"use strict";
var O891 = {
    b: "2",
    c: 3,
};
var O892 = {
    d: "2",
    c: 5,
};
var O893 = {
    e: "2",
    c: 5,
};
function cross89(O891, O892, O893) {
    var combine = {};
    union89(combine, O891);
    union89(combine, O892);
    union89(combine, O893);
    return combine;
}
function union89(combine, curobj) {
    for (var k in curobj)
        combine[k] = curobj[k];
    return combine;
}
console.log(cross89(O891, O892, O893));
