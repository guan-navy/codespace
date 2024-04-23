//索引访问类型
// 可以通过索引访问接口的属性类型来获取对象类型中的属性类型
const symid = Symbol('id')
interface Product16 {
  name: string
  price: number
  //将symbol的值作为了类型索引
  [symid]: boolean
  
}
type A = Product16['name']
type B = Product16['price']
type C = Product16['name' | 'price']
//通过typeof 将作为索引的变量转化再次作为索引
type E = Product16[typeof symid]
//获取Product16的所有类型索引，并且生成联合类型
// 'name' || 'price' || typeof 'symid'
type keys16 = keyof Product16



type D = Product16[keyof Product16]

// 通过泛型迭代出接口所有的类型
type AllKeys<T> = T extends any ?  T : never
 type F = AllKeys<keyof Product16>