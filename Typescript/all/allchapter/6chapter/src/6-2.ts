//泛型的类型参数1. A-Z的大写字母,2. 语义化的单词
interface ref{
    value:any
}
let ref:ref = {value:1}
let ref2:ref = {value:{name:'zhangsan'}}
// any可以表示任何类型,但是自动提示没有了
// ref2.value.

interface Ref<T>{
    value:T
}
let ref3:Ref<number> = {value:1}
let ref4:Ref<{name:string}> = {value:{name:'zhangsan'}}
// 这里就有提示词
// ref4.value.
 