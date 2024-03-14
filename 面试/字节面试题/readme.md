# 对象中的属性判断
object.defineProperty
vue的响应式是通过这个来的


1. 直接通过
object[key] !== undefined
2. 通过
Object.Key(object),includes(key) 


3. 对象的自带方法,
判断对象是否显式具有某个属性,
不能判断隐式继承的
hasProperty(object, key)


4. key in object

判断一个对象中是否有一个属性
即便是继承的属性，也会返回true
即便是不可枚举的属性，也会返回true

# 如何做大整数相加

2^53次方是最大安全值

使用bigInt


# 3.数组去重

jsonStringfy+set
自手搓

# 如何使用for of 遍历对象

# 在js当中如何实现并发任务的控制

定时器setInterval和setTimeout不是js的一部分，是浏览器的,浏览器是多线程,
现在js不是单线程的,webworker是一个js提供的手动开启多线程的api,js在默认的情况下是单线程的