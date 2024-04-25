//getter 和setter的使用
class student {
  //对对象初始化值的限制
  name: string;
  //!号的作用，让编译器在变量空值是不报错
  private _age!: number;
  constructor(_name: string) {
    this.name = _name;
  }
  set age(value: number) {
    if (value < 0) {
      throw new Error("年龄不能小于0");
    } else {
      this._age = value;
    }
  }
  get age() {
    return this._age;
  }
  doEat(who: string, where: string) {
    console.log(`${this.name}在${where}和${who}吃饭`);
  }

}
let mike = new student("mike");
mike.age = 18;
console.log(mike.age);


class StringUntil {
  static triSpace(str: string) {
    return str.replace(/\s+/g, "");
  }
}

//实战,原型链
// 该方法获取类方法的属性配置信息，调用的时候创建一个新的对象来存储
const dataProp = Object.getOwnPropertyDescriptor(student.prototype, "doEat");
console.log(dataProp, dataProp!.value());
//获取到需要拦截的方法
const targetMethod = dataProp!.value;
dataProp!.value = function (...args: any[]) {
  args = args.map((item) => {
    if (typeof item === "string") return StringUntil.triSpace(item);
    else return item;
  });
  console.log("前置拦截");
  //因为这里的函数不是通过对象调用this指向的话会丢失this，所以需要用apply
  targetMethod.apply(this, args);
  console.log("后置拦截");
};
//将原型上的这个方法重新赋值
Object.defineProperty(student.prototype, "doEat", dataProp!);
mike.doEat("小 美", "老 三 样");

// todo:将上面的方法封装之后添加到Object,prototype上让所有的类的方法都能被拦截
function trimSpace(this: any) {
    //获取调用该方法的调用者this
    // 通过this获取原型
    //获取方法名数组
    const obj: any = this.__proto__; //this指向的是调用该方法的对象，obj为该对象的原型
    const methodNames = Object.getOwnPropertyNames(obj).filter(
      (prop) => typeof prop === "function"
    );
    methodNames.forEach((methodName) => {
     
        function trimSpaceFn(str: string) {
          return str.replace(/\s+/g, "");
        }
      const dataProp = Object.getOwnPropertyDescriptor(obj, methodName);
      const targetMethod = dataProp!.value;
      dataProp!.value = function (...args: any[]) {
        args = args.map((item) => {
          if (typeof item === "string") return trimSpaceFn(item);
          else return item;
        });
        console.log("前置拦截");
        //因为这里的函数不是通过对象调用this指向的话会丢失this，所以需要用apply
        targetMethod.apply(this, args);
        console.log("后置拦截");
      };
      Object.defineProperty(obj, "doEat", dataProp!);
    });
  }
//在Object的隐式原型上创建一个新属性并赋值
Object.defineProperty(Object.prototype,'trimSpace', {
    value: trimSpace,
    writable: true,
    enumerable: true,
    configurable: true
  });

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    doSport(who: string, where: string) {
        console.log(`${this.name}在${where}和${who}运动`);
      }
  }

let p = new Person('张三', 18);

p.doSport('李 四', '北 京');




