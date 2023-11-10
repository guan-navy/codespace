# bigInt
- 数字后面加个n,不设上限安全值
- js v8执行引擎中能表示的最大值为2**53

# symbol

- 创建独一无二的值,用于框架中解决变量冲突问题

# typeof
1. 可以准确判断除null之外的原始类型
2. 可以准确判断function
    - 判断引用类型时,返回都是object,但是只有函数类型可以判断为函数

# instance
- 能够判断所有的引用类型
- 但是不能判定原始类型
- 而且是通过原型链来查找判断的

#  Object.prototype.toString.call()
 - If the this value is null, return "[object Null]".
 1. 
 2.
 3. 令 O为调用ToObject并传递this值作为参数的结果。
 4. 令 class为O的 [[Class]] 内部属性的值。
 5. 返回由三个字符串“ [object ”、 class和“ ] ”连接而成的字符串值。


- 疑惑
 let o ={}
 o.toString()
 Object.prototype.tostring('123')


 # call
 # arguments 
 - 所有函数传入参数的统称