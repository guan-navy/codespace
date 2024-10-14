"use strict";
{
    var ObjectRefImpl_1 = (function () {
        function ObjectRefImpl(_object, _key) {
            this._object = _object;
            this._key = _key;
            this.__V_isRef = true;
        }
        Object.defineProperty(ObjectRefImpl.prototype, "value", {
            get: function () {
                return this._object[this._key];
            },
            set: function (newValue) {
                this._object[this._key] = newValue;
            },
            enumerable: false,
            configurable: true
        });
        return ObjectRefImpl;
    }());
    var obj66_1 = new ObjectRefImpl_1({
        name: 'zhangsan',
        age: 18
    }, 'age');
    console.log(obj66_1.value);
}
