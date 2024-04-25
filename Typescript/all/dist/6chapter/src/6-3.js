"use strict";
class ArrayList {
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
