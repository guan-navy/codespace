//向外提供一个可读性的接口
// api的简洁
//缓存
//vue组件代码可能很多,compostion api可能代码很多
import{murableHandlers}
export const reactiveMap = new WeakMap()
export function reactive(target){
    //提升可读性
return createObjectiveObject(
    target,reactiveMap,muTableHandlers
)
}

//proxy区别于defineProperty 操作更多,模块化
function createReactiveObject(target,proxyMap,proxyHandlers){
    if(typeof target !== 'object' && typeof target !== 'function'){
console.log(`reactive${target}必须是一个对象`);
return target
    }
    const existingProxy = proxyMap.get(target)
    if(existingProxy){
        return existingProxy
    }
    const proxy = new Proxy(target,proxyHandlers)
    proxyMap.set(target,proxy)
}