#  对象
- 基本数据类型的变量是放在栈里,引用类型的内容不放在调用栈里面,因为可能导致调用栈满掉
- 引用类型的内容存放在堆里面,堆的内存空间很大,变量名里面的存放的其实是地址值


# 构造函数
- new的过程
1. 隐式的创建一个this={}
2. 执行函数中的this.xxx=xxx
3. 隐式的返回this

# 包装类
 原始值是不能拥有属性和方法的:
- 当定义一个原始值将其.+属性名=值将会执行下面这些操作,
1.因为也有构造函数能够创造封装类对象然后可以读出为原始数据
2.但是原始数据又规定是没有属性值和方法
 - var num ;num.len=4;  ->  var num=new Number(4)   num.len=3   delete num.len//这个离谱的执行过程叫做隐式包装类
- 考点:字符串并不是,所以说并不能通过lenth更改字符串的长度,因为二者数据类型不同
所以对象属性可以留下来是因为允许拥有属性和方法

 