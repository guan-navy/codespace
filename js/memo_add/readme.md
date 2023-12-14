# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    单线程 简单 +event loop 太脆了
    throw + try catch()
- cache 自由变量key 设置唯一的key值
    1+12 11+2
    - arguments 伪数组 兼容性不太好
    [...argument].join('')
    Array.from(arguments)
    Object.prototype.toString
    Array.prototype.join.call(arguments),让伪数组借用了join方法,因为里面的this会指向数组实例
- fibonacci 爬楼梯问题
    - 递归的通用问题 ,不停地入栈
     自顶向下解决问题,但是会存在暴栈的问题
    - 优化
     - 记忆函数备忘录
     - 自底向上解决问题,动态规划dp
    f(1) = 1
    f(2) = 1
    f(3) = f(1) + f(2)