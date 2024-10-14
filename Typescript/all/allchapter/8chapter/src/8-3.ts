// vue3 源码当中infer在响应数据当中的解套应用
//将响应式对象转换为去掉响应式对应的值
// export function unref<T>(ref: T ): T extends Ref <infer V>? V: T {
//   return isRef(ref) ? ((ref as any).value ) : ref
// }
//如果这个变量是ref对象则返回value值的类型,否则返回原类型
//然后在返回的时候使用了as any ,因为前面使用的是泛型没有去确定类型所以ref的类型不确定所以需要as any


// function test83<T>(arr:T){

//    return (arr as any).value

// }