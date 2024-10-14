interface Customer811 {
  name: string;
  age: number;
  address: string;
}
//直接使用keyof 关键字获取 Customer811 的所有属性
type CustomerKeys8111 = keyof Customer811;
// 更加直观的看到类型
// 因为这种写法会拿类型一个一个去比较所以会更加的直观
type Directkeys<T> = T extends any ?   T : never;
type  CustomerKeys8112 = Directkeys<keyof Customer811>
