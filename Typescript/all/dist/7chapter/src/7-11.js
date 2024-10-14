"use strict";
var o4 = {
    b: "2",
    c: 3,
    d: "4",
};
var O1 = {
    b: "2",
    c: 3,
};
var O2 = {
    d: "2",
    c: 5,
};
var O3 = {
    e: "2",
    c: 5,
};
function cross(o1, o2, o3) {
    var combine = {};
    union(combine, o1);
    union(combine, o2);
    union(combine, o3);
    return combine;
}
function union(combine, curobj) {
    for (var k in curobj)
        combine[k] = curobj[k];
    return combine;
}
console.log(cross(O1, O2));
console.log(cross(O1, O2, O3));
