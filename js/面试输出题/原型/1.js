class A {
  a = 1;
  test(newValue) {
    this.a = newValue;
  }
  test2 = (newValue) => {
    this.a = newValue;
  };
}
console.log(new A().test(1) === new A().test(1));
//true
console.log(new A().test(2) === new A().test2(2));

; //true

const method1 = new A().test(1);

const method2 = new A().test2(2);
