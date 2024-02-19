import {track,trigger} from './effect.js'
const get = createGetter();
const set = createSetter();

function createGetter() {
  return function get(target, key, reciver) {
    // target被代理的源对象, key是原对象中的键, receiver是代理对象
    console.log("值被读取了", key);
    const res = Reflect.get(target, key, reciver); // target[key]

    // 这个属性究竟还有哪些地方用到了(副作用函数的收集)
    track(target, key);

    return res;
  };
}

function createSetter() {
  return function set(target, key, value, reciver) {
    console.log("值被修改了", key, value);

    const res = Reflect.set(target, key, value, reciver);
    // 需要记录下来是哪一个key的值变了,再去通知其他依赖函数生效,更新浏览器的视图
    // 为每一个修改的属性添加副函数依赖收集
    trigger(target, key);
    return res;
  };
}

export const mutableHandlers = {
  get,
  set,
};
