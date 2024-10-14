"use strict";
var ArrayList = (function () {
    function ArrayList() {
        this.arr = [];
    }
    ArrayList.prototype.add = function (ele) {
        this.arr.push(ele);
    };
    ArrayList.prototype.get = function (index) {
        return this.arr[index];
    };
    return ArrayList;
}());
