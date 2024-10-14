const { effect, reactive } = require('@vue/reactivity');

let dummy
// 响应式机制的主要功能是。把普通Javascript对象封装成为响应式对象，
// 拦截数据的获取 和修改操作，实现依赖数据的自动化更新 
const counter = reactive({num1:1, num2:2})
// 注册回调函数， 响应式地通知effect 执行函数
effect(() => {
    dummy = counter.num1 + counter.num2;
    console.log(dummy)
})
setInterval(() => {
    counter.num1++;
}, 1000)
