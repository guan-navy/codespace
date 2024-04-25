"use strict";
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__V_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newValue) {
        this._object[this._key] = newValue;
    }
}
const obj66 = new ObjectRefImpl({
    name: 'zhangsan',
    age: 18
}, 'age');
console.log(obj66.value);
