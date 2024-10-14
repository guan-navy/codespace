"use strict";
var Dog = (function () {
    function Dog(name) {
        this.dogName = name;
    }
    return Dog;
}());
var Cat = (function () {
    function Cat(name) {
        this.catName = name;
    }
    return Cat;
}());
function isDog(viriety) {
    return viriety instanceof Dog;
}
function getName57(mypet) {
    if (isDog(mypet)) {
        mypet.dogName;
    }
}
function test57(mypet) {
    return isDog(mypet) ? mypet.dogName : mypet.catName;
}
