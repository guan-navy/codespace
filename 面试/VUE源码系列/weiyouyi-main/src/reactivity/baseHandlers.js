import { track, trigger } from "./effect"
import {
  reactive,
  ReactiveFlags,
  reactiveMap,
  shallowReactiveMap,
} from "./reactive"
import { isObject, hasOwn } from "../shared"

const get = createGetter()
const set = createSetter()
const shallowReactiveGet = createGetter(true)

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    //是不是已经存在两个map中，实际还会更多 还有readonly啥乱遭的
    const isExistMap = () =>
      key === ReactiveFlags.RAW &&
      (receiver === reactiveMap.get(target) || receiver === shallowReactiveMap.get(target))

    if (key === ReactiveFlags.IS_REACTIVE) {
      return true
    } else if (isExistMap()) {
      // 已经存在缓存里
      return target
    }

    const res = Reflect.get(target, key, receiver)
    track(target, "get", key)

    if (isObject(res)) {
      // 值也是对象的话，需要嵌套调用reactive
      // res就是target[key]
      // 浅层代理，不需要嵌套
      return shallow ? res : reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    // 在触发 set 的时候进行触发依赖
    trigger(target, "set", key)
    return result
  }
}
function has(target, key) {
  const res = Reflect.has(target, key)
  track(target, 'has', key)
  return res
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key)
  const result = Reflect.deleteProperty(target, key)
  if (result && hadKey) {
    trigger(target, 'delete', key)
  }
  return result
}

export const mutableHandlers = {
  get,
  set,
  has,
  deleteProperty
}

export const shallowReactiveHandlers = {
  get: shallowReactiveGet,
  set,
  has,
  deleteProperty
}
