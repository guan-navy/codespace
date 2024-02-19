// 手写响应式
import { mutableHandlers } from "./baseHandlers.js";

export const reactiveMap = new WeakMap(); // 存储被代理过的对象

export function reactive(target) {
  // 将target变成响应式
  return createReactiveObject(target, reactiveMap, mutableHandlers); // 类型判断
}

function createReactiveObject(target, proxyMap, proxyHandlers) {
  // 响应式函数
  // 判断target 是不是一个引用类型
  if (typeof target !== "object" || target === null) {
    // 不是对象就不给操作
    return target;
  }

  const existingProxy = proxyMap.get(target); // 该对象是否已经被代理过呢
  if (existingProxy) {
    return existingProxy;
  }

  // 执行代理操作
  // 第二个参数: 当target被读取值,设置值,判断值等等操作时会触发的操作
  const proxy = new Proxy(target, proxyHandlers); // 修正此处的小写proxy为大写Proxy

  // 响应式对象放入map中,将代理过的对象缓存起来
  proxyMap.set(target, proxy);
  return proxy;
}
