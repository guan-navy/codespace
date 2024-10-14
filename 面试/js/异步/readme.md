# js 为什么要异步

因为 js 是一门单线程的编程语言，同一时间只能执行一个任务

# js 为什么不设计成多线程

1. 节约内存
2. 没有锁,解锁的过程,节约上下文切换的时间

# 请你聊一聊异步的发展史

## 是什么

js 中从最早的异步处理方式到现在最新的异步处理方式

## 发展史

### 最早的异步处理方式,回调,

##### 缺点

当一层一层嵌套代码维护困难,代码可读性差,代码可维护性差

### promise
  1. 维护了一个状态,state,值为padding  fullfilled rejected目的是让promise的状态一经改变,就不能再次修改,也就保证了如果写了resolve和reject  then 和catch不可能同时 触发
   .then()当中的回调函数的触发逻辑,是通过状态来触发的,当状态为fullfilled时,执行then中的回调函数,当状态为rejected时,执行catch中的回调函数
   2. 内部的resolve函数会修改state为fullfilled,并处罚then中的回调
   
   3. then
    1. then会默认返回一个promise对象,状态为fulfilled
    2. 当then前面的promise状态为fulfilled,then中的回调直接执行
    当then前面的promise状态为rejected,then中的回调不执行,而是执行catch中的回调
    当then前面的promise状态为pending,then中的回调缓存起来交给resolve或者reject,当状态改变时,执行缓存中的回调

    ### generator
    1. 迭代对象,将yield 后面的表达式作为 next()的返回值
    2. 分段执行,可以暂停
    3. 可以知道是否执行完成
    4. 通过yield关键字,将函数的执行权交给其他函数,当其他函数执行完毕后,再将执行权交给generator函数,继续执行

    5. 可以借助thunk 和co 模块 处理异步但是写法复杂,所以generator函数的意义是为了打造async await
## async/await 
  
  1. es6提供的新的一种的处理异步代码的方案
  2. 没有错误捕获机制相比于promise,通常在外面包裹一层try catch语句捕获错误
  3. 是promise +generator 来实现的,本质是在generator的基础上,通过递归的方式来自动执行一个又一个的next函数,当done为true时,执行完毕,返回结果,当done为false时,继续执行下一个next函数,其实这也是co模块的实现原理
