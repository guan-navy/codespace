"use strict";
function pickValues(arr) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return arr.map(function (obj) {
        var newObj = {};
        keys.forEach(function (key) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key];
            }
        });
        return newObj;
    });
}
var objects = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];
var pickedValues = pickValues(objects, 'name');
console.log(pickedValues);
