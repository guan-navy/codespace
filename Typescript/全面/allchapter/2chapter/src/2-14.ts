// interface Product{
//     name:string;
//         price:number;
//         discount:number;
// }
type Product = {
  name: string;
  price: number;
  discount: number;
  //buy函数
  buy(): void;
};
let p: Product = {
  name: "T-shirt",
  price: 500,
  discount: 10,
  buy() {
    console.log("buy");
  },
};
//接口继承-----------------------------------------
interface Pet{ //宠物
    name:string;
    age:number;
  
    toHealth():void;
    
}
//只有狗狗会狗叫
//狗叫这个方法不应该写在宠物当中
interface Dog extends Pet{ //狗
    bark():void;
}
type b = {
  a:1
  ,
  b:2
}
//提供接口,在函数中对于自定义的对象类型进行处理,参数的类型需要写成接口或者是type
function getProduct(product:b)

{
  console.log(product.a);
}
//一个接口可以衍生出非常多的,接口可以为这些类的共同的方法统一方法命名
//也就是需要去实现这些接口定义不然会编译器报错
//就像说明书和目录一样,方便维护

class MyDog implements Dog{
  bark(): void {
    throw new Error("Method not implemented.");
  }
  name: string;
  age: number;
  toHealth(): void {
    throw new Error("Method not implemented.");
  }
  constructor(name:string,age:number){
      this.name=name;
      this.age=age;
  }
  

}

