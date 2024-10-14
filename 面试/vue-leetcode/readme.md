let num1  = 10
let num2  =5
//位运算 & | 遵守了 && || 的含义 可以在二进制层面运算,性能更好,这是最底层的东西最快执行的

- 聊vue patch 过程的时候要聊到位运算
更新

DOM 更新是在浏览器的渲染层
JS v8 引擎主线程


let result = num1 & num2
console.log(result)

最长公共子序列
- 节点之间还要比对属性,文本....o(n^3)
