"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function combine() {
    var unionObj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        unionObj[_i] = arguments[_i];
    }
    return unionObj.reduce(function (acc, obj) { return (__assign(__assign({}, acc), obj)); }, {});
}
var crossResult2 = combine({ count: 2, price: 4, name: { ownName: "kate" } }, { price: 2 }, { address: "beijing" });
crossResult2.address;
crossResult2.count;
