// pdd面试题目
a = 50;

class A {
  a = 1;
  constructor() {
    console.log('class当中的this是',this);
    
  }
  test1(newValue) {
    console.log("this1前", this);
    this.a = newValue;
    console.log("this1后", this);
  }
  test2 = (newValue) => {
    console.log("this2前", this.a);
    this.a = newValue;
    console.log("this2后", this.a);
  };
 
  
}

// function test1(newValue) {
//   console.log("this1", this);
//   this.a = newValue;
// }
// test2 = (newValue) => {
//   console.log("this2", this.a);
//   this.a = newValue;
//   console.log("this2change", this.a);
// };

// console.log(new A().test1(1) === new A().test1(1))
// console.log(new A().test2(2) === new A().test2(2))

const method1 = new A().test1 // 使用类当中的函数查看this指向
// const method1 = test1 // 使用全局定义的函数
method1(1)
// method2(2)

// method1(10) // 报错！！！
// const method2 = new A().test2
// method2(2)

const aa = new A();
const method = aa.test1.bind(aa);
// method(222)

// new A().test1(10)

class B {
  a = 888;
  method = method;
}
// new B().method()

// test1(5)
// test2(6)
