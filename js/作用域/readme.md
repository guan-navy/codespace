ctrl+~打开终端
-js 是弱类型动态语言

-全局作用域

-函数作用域[[scope]]

--变量的查找是可以从内部作用域往外部作用域查找

-变量的查找不能由外到内查找

--编译时要找到当前域中的有效标识符,也就是记录定义的函数以及变量但是并不执行函数内部

--当编译好的代码给v8引擎执行时便会由上往下执行

-- 块级作用域let相对于
 var来说不能重复定义相同变量
 var存在声明提升的问题


--欺骗词法作用域

--当with修改不存在的属性时会把该对象的属性泄露在全局,即在全局创建了一个同名相同值的变量evarl

--当在函数数当中声明变量前没有关键字时,该变量为全局变量
