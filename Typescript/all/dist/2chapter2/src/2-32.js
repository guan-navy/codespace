"use strict";
var student = (function () {
    function student(_name) {
        this.name = _name;
    }
    Object.defineProperty(student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("年龄不能小于0");
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    student.prototype.doEat = function (who, where) {
        console.log("".concat(this.name, "\u5728").concat(where, "\u548C").concat(who, "\u5403\u996D"));
    };
    return student;
}());
var mike = new student("mike");
mike.age = 18;
console.log(mike.age);
var StringUntil = (function () {
    function StringUntil() {
    }
    StringUntil.triSpace = function (str) {
        return str.replace(/\s+/g, "");
    };
    return StringUntil;
}());
var dataProp = Object.getOwnPropertyDescriptor(student.prototype, "doEat");
console.log(dataProp, dataProp.value());
var targetMethod = dataProp.value;
dataProp.value = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args = args.map(function (item) {
        if (typeof item === "string")
            return StringUntil.triSpace(item);
        else
            return item;
    });
    console.log("前置拦截");
    targetMethod.apply(this, args);
    console.log("后置拦截");
};
Object.defineProperty(student.prototype, "doEat", dataProp);
mike.doEat("小 美", "老 三 样");
function trimSpace() {
    var obj = this.__proto__;
    var methodNames = Object.getOwnPropertyNames(obj).filter(function (prop) { return typeof prop === "function"; });
    methodNames.forEach(function (methodName) {
        function trimSpaceFn(str) {
            return str.replace(/\s+/g, "");
        }
        var dataProp = Object.getOwnPropertyDescriptor(obj, methodName);
        var targetMethod = dataProp.value;
        dataProp.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) {
                if (typeof item === "string")
                    return trimSpaceFn(item);
                else
                    return item;
            });
            console.log("前置拦截");
            targetMethod.apply(this, args);
            console.log("后置拦截");
        };
        Object.defineProperty(obj, "doEat", dataProp);
    });
}
Object.defineProperty(Object.prototype, 'trimSpace', {
    value: trimSpace,
    writable: true,
    enumerable: true,
    configurable: true
});
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.doSport = function (who, where) {
        console.log("".concat(this.name, "\u5728").concat(where, "\u548C").concat(who, "\u8FD0\u52A8"));
    };
    return Person;
}());
var p = new Person('张三', 18);
p.doSport('李 四', '北 京');
