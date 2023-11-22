# js 单线程

- 进程:cpu运行指令保存上下文的时间

- 线程:进程当中更小的单位描述了一段指令执行所需要的时间

## 浏览器新开一个tab页面就是新开一个进程
需要多个线程配合才能完成页面的展示
1. 渲染线程
2. http请求线程
3. js引擎线程

渲染线程(GPU)和js引擎线程互斥的

# JS单线程
优点:
1. 节省内存
2. 单线程没有🔒的概念，节省上下文切换的时间

# 异步
- 宏任务 (macrotask)：
script
setTimeout(写不写事件都算宏任务)
setInterval
setImmediate
I/O(点击时间输入输出的那种)
UI-rendering

- 微任务(microtask)
promise.then()
MutationObserver
Process.next()

# event-loop
1. 执行同步代码（这是属于宏任务）
2. 当执行栈为空,查询是否有异步代码需要执行
3. 执行微任务 微任务并不比宏任务限制性
4. 如果有需要,会渲染页面
5. 执行宏任务(这也叫下一轮event-loop的开启)


# async
- 可以加在任何函数前面
- await不能单独出现
await后续代码的执行,将后续代码推入到微任务队列当中