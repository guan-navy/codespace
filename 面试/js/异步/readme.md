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