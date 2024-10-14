"use strict";
var ArrayList64 = (function () {
    function ArrayList64() {
        this.arr = [];
    }
    ArrayList64.prototype.add = function (ele) {
        this.arr.push(ele);
    };
    ArrayList64.prototype.get = function (index) {
        return this.arr[index];
    };
    return ArrayList64;
}());
