// User.ts



// // 声明 Symbol 实例
// const symid53:unique symbol = Symbol("sym");

// // 定义接口
//  interface UserInterface {
//   // 使用 typeof 获取 symid53 的类型
//   [symid53]: string;

//   name: string;
//   age: number;
// }

// // 创建并初始化用户对象
//  const user53: UserInterface = {
//   [symid53]: "admin",
//   name: "John",
//   age: 30
// };

// // 示例：访问用户对象的属性
// console.log(user53[symid53]); // 输出: admin


//当使用字符串变量名来访问对象属性的话,因为变量是会变化的,编译器报错
// 1. 解决使用const 定义符号变量
// 2. 使用as any,存在场景就是外部给你传递的变量,所以不能确定是const ,as any就能解决这个问题
let symid53_1= Symbol("sym");
let user53_1 = {
  [symid53_1]: "admin",
  name: "John",
  age: 30
};
let name53_1 ='name'
console.log(user53_1[name53_1 as any]);
