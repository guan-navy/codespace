// function a(){
//     this.a = 1
//   }
//   const  obj_1 = new a()
//   console.log(obj_1)
// function fn1(a, b) {
//   this.a = 1;

//   console.log("this.a", this.a);
//   console.log(this, a, b);
// }

// const fn4 = new fn1();
// console.log(fn4);

const obj = new function () {
    this.a = 1;

};
console.log(obj);
