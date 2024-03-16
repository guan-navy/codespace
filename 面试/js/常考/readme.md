# 数组上的一些方法

1. 增加元素 push unshift  splice concat 不影响原数组
2. 删除元素 pop shift splice slice不影响原数组,修改掉数组的
3. 改 reverse sort ,fill
4. 查 indexOf lastIndexOf 找不到元素返回-1,返回的下标并不会

includes
find遍历数组 ,返回第一个符合条件的元素

5. 遍历数组的方法

forEach map filter every some reduce

every要所有满足  ---> 联想到promise 的all方法,全部的promise对象都是fullfilled,才执行

- forEach 和 map 的区别
forEach  修改不了原数组,
return无法终止map的循环,
forEach中也没有break也没有continue


map  进行的过程中,会生成一个等长的原数组,每一次return的值为新数组的每一个元素,没有return的值为undefined


reduce((pre,item,i,arr)=>{
    return pre + item
},0)

返回值为pre的最终值,return 的值为返回的值,


6. 转换

转化为字符串,join()


对象的toString方法和数组的tostring方法不是同一个方法,对象的toString方法返回的是[object Object],数组的toString方法返回的是数组的字符串


# 字符串

1. 增加 concat  拼接两个字符串 padStart padEnd  前面和后面填充字符串 
2. 删除 substr  slice  subString

subString (start,end)切下标的范围是左闭右开
substr (start,num)切下标范围是左闭右闭,num为切割的数量

3. 改 replace (要修改的,修改之后的值)  
repeate(重复字符串的字数num) 
trim 只会去掉前后的空格  tirmLeft  trimRight  

toLocaleLowerCase()  toLowerCase() 
toLowerCase() toUpperCase()


4. 查 includes indexOf lastIndexOf s.charAt(index)  endsWith

5. 转化 charCodeAt 直接将字符转换为对应的unicode码
split(' '),去寻找到相应的字符,隔开,返回一个数组,如果是空格返回一个数组一个元素就是改数组

toString方法


# 3. == 和 === 的比较

# 4. 类型转化

# 5. 深浅拷贝
深浅拷贝,拷贝指的是讲一个对象中的元素复制到一个新的对象中,拷贝又分为浅拷贝和深拷贝
深拷贝会层层拷贝每一个属性,不受原对象修改值的影响

浅拷贝:Object.assign(),

数组解构,slice方法,concat方法

深拷贝:
在js中应该就这一个方法
JSON.parse(JSON.stringify(obj))
但是也有缺陷,无法被拷贝的 Symbol BigInt  function   undefined,以及对象属性循环引用成环

structuredClone()不能拷贝symbol,function

# 6.谈谈你对闭包的理解


闭包不只有return内部函数才会产生闭包,
其实只要在外部调用了内部函数,内部函数就会产生闭包
闭包是内部函数调用外部函数变量的集合

- 是什么
根据词法作用域的规则,内部函数一定能够访问它外部的函数变量,当内部函数对外部函数中的变量存在引用并且被提到外部函数之外调用,及时外部函数执行完毕,它的执行上下问也无法本完全销毁,而是会将内部函数引用的变量作为一个集合保留在调用栈中,该集合被称为闭包


- 好处
 - 私有变量
 - 延长变量的它的生命周期,会存储在作用栈当中
- 缺点
内存泄露

- 怎么去解决内存泄露
使用weekmap,weakset

# 7.原型

- 获取原型的方法
获取对象的隐式原型
object.__proto__ 
getPrototypeOf()
获取构造函数的显示原型
.prototype

- 是什么
原型是一个对象,分为隐式原型和显示原型,隐式原型是对象上的_poto_属性,显式原型是函数上的prototype属性

当我们要访问一个对象的某个属性时,会先去该对象上找,如果没找到,会去该对象的原型对象上找,如果没找到,会去原型对象的原型对象上找,直到找到为止,如果没找到会一直按着这个规则一直找下去,直到找到最终的null为止

1. 函数的_proto_ === Function 但是箭头函数没有原型


# 8.继承

多个实例之间共用了同一个原型,存在属性
实例对象修改到原型上面的属性

原始数据类型修改不到,但是引用类型被修改到

- 1.  直接修改对象的隐式原型实现继承
缺点:无法往父类中传参

Child.prototype = new Parent()

- 2. 通过构造函数实现继承
使用call方法,将父类的属性和方法赋值到子类中,这样子类就继承了父类的属性和方法
这样也就优化了子类无法向父类传参的问题,等于就是将this的哪些方法的代码拿到子类中去使用
function child(){
    Parent.call(this)
}


缺点:无法继承父类的原型的方法和属性

- 3. 组合继承经典继承

结合上面的两但是修改了子类的隐式原型对象但是他的构造器属性会因为修改掉

需要增加上,防止潜在的bug
child.prototype.constructor = Child


缺点:父类方法被调用了两次,可能存在潜在的性能问题

- 4. 原型式继承 object.create()

缺点:多个对象使用了同一个原型,属性会相互影响

- 5. 寄生式继承
使用原型式继承来弥补原型链继承的缺点
- 6. 类的继承

在子类中调用super()方法调用父类的构造器,可以往父类传参
构造器也没有问题


# 9. 说说你对this的理解
- 是什么
this是一个函数中的一个关键字,用于函数作用域的指向,全局当中使用this的话没有意义,默认指向全局对象
- 词法作用域
变量和函数声明在那里作用域就在那
- 绑定规则
    - 1. 默认绑定
    函数在哪个词法作用调用,函数的this就指向那个词法作用域,但是词法作用域要找到底才算所以最后还是指向window
    默认绑定就是指向window
    - 2. 显示绑定
    call,apply,bind
    - 3. 隐式绑定
    当一个函数被一个对象拥有,且通过对象调用的时候,函数的this指向这个对象
    但是你直接通过赋值调用的话还是默认绑定
    - 4. 隐式丢失
    通过多个对象调用函数,里面的this,就近原则,this会指向最近的那个对象

    - 5. new 绑定
    当使用
    - 6. 箭头函数绑定:箭头函数中并没有this,所以写在箭头函数中this指向的是外部非箭头函数的this
    所以其中this的指向也就是外部函数的this
