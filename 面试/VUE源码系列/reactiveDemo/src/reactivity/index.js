
//一个简单的响应式模型,通过reactive/ref,报数据包裹成响应式对象
//并且通过effect函数注册ha
// 大型项目都会在每个模块下统一向外输出,清单文件

export{effect} from './effect'
export{reactive} from './reactive'
export {ref} from './ref'