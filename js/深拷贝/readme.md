# 拷贝
通常只针对于引用类型

# 浅拷贝  包括隐式原型的继承
- 常见的对象浅拷贝方法:
1. Object.create(obj),
2. Object.assign(obj,obj1..)
- 常见的数组拷贝方法:
1. slice()切割字符子串
2. concat 拼接
3. 解构
4. arr.toReversed().reverse()
引用类型的复制都是浅拷贝
# 深拷贝
就这一个但是还存在缺点
- JSON.parse(JSON.stringify(obj))
原始类型的赋值都是深拷贝
## 缺点
 1. 无法拷贝undefined, function ,symbol ,bigint
 2. 无法处理循环引用


# 眼前一亮的深拷贝方法
使用管道通信的方式
使用postchannel