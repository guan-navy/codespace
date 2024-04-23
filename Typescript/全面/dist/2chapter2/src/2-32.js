"use strict";
class student {
    constructor(_name) {
        this.name = _name;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("年龄不能小于0");
        }
        else {
            this._age = value;
        }
    }
    get age() {
        return this._age;
    }
    doEat(who, where) {
        console.log(`${this.name}在${where}和${who}吃饭`);
    }
}
let mike = new student("mike");
mike.age = 18;
console.log(mike.age);
class StringUntil {
    static triSpace(str) {
        return str.replace(/\s+/g, "");
    }
}
const dataProp = Object.getOwnPropertyDescriptor(student.prototype, "doEat");
console.log(dataProp, dataProp.value());
const targetMethod = dataProp.value;
dataProp.value = function (...args) {
    args = args.map((item) => {
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
    const obj = this.__proto__;
    const methodNames = Object.getOwnPropertyNames(obj).filter((prop) => typeof prop === "function");
    methodNames.forEach((methodName) => {
        function trimSpaceFn(str) {
            return str.replace(/\s+/g, "");
        }
        const dataProp = Object.getOwnPropertyDescriptor(obj, methodName);
        const targetMethod = dataProp.value;
        dataProp.value = function (...args) {
            args = args.map((item) => {
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    doSport(who, where) {
        console.log(`${this.name}在${where}和${who}运动`);
    }
}
let p = new Person('张三', 18);
p.doSport('李 四', '北 京');
