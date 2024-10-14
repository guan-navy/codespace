"use strict";
function deepCopy(data) {
    var result = {};
    Rcwork(data);
    function isPlainONbject(data) {
        return Object.prototype.toString.call(data) === '[object Object]';
    }
    function isObj(data) {
        return typeof data === 'object' && data !== null;
    }
    function isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]';
    }
    function isFunction(data) {
        return Object.prototype.toString.call(data) === '[object Funcition]';
    }
    function Rcwork(data) {
        if (isObj(data)) {
            if (isPlainONbject(data)) {
                for (var key in data) {
                    if (data === null || data === void 0 ? void 0 : data.hasOwnProperty(key)) {
                        Object.defineProperty(result, key, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: Rcwork(data[key])
                        });
                    }
                }
            }
            else if (isArray(data)) {
                return;
            }
            else if (isFunction(data)) {
                var copyFun = function (fun) {
                    return new Function("return".concat(fun.toString())).call(fun);
                };
                return copyFun(data);
            }
        }
        else {
            return data;
        }
    }
}
