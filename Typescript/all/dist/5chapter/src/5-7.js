"use strict";
class Dog {
    constructor(name) {
        this.dogName = name;
    }
}
class Cat {
    constructor(name) {
        this.catName = name;
    }
}
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
