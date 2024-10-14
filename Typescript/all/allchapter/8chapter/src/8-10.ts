//extract 的高级应用
//在对象合并中的例子里虽然,对于参数的类型进行了限制,但是object类型,其子类一样可以赋值,array,function

// 所以我们就需要exclude 了，去排除掉不需要的类型

type MyExclude<T, U> = T extends U ? never : T;
type test = MyExclude<"a" | "b" | "c", "a">;