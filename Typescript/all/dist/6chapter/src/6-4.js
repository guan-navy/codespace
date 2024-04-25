"use strict";
class ArrayList64 {
    constructor() {
        this.arr = [];
    }
    add(ele) {
        this.arr.push(ele);
    }
    get(index) {
        return this.arr[index];
    }
}
