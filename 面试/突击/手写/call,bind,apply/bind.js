Function.prototype.mybind = function (Obj, ...args) {
  return (...resArgs) => {
    this.call(Obj, ...args, ...resArgs);
  };
};

const a = {
  name: "a",
  sayName(args1, args2) {
    console.log("args2", args2);
    console.log("args1", args1);
    console.log("name", this.name);
  },
};
const b = {
  name: "b",
};

a.sayName.mybind(b,1)(2)
