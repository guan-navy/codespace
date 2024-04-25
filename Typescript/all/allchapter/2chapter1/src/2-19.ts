//不固定的字符串作为固定对象的索引
//就会报错

let obj219: {username: string; age: number; } = { username: "wanghu", age: 12 };
// let name219 = "username";
// const name219:string = "username";
// 索引变量不能定义类型,也不能去定义为变量
const name219 = "username";

let u = obj[ name219 ];
console.log(obj.age);
console.log(u);
