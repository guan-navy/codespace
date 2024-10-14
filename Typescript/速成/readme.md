# TS过一遍
## ts问题
1. 在同一项目下的ts文件的全局变量不能重复命名
TypeScript 编译器本身会在全局作用域下自动合并所有声明文件（.d.ts），如果在不同文件中有两个同名顶级变量（非局部变量），编译时会报错。
但是，在模块系统中，由于导入导出机制的存在，不同模块内部的同名变量通常是隔离的，因此即使同名也不会发生冲突。
## 准备工作

1. 这个插件可以现将ts文件转化为js文件之后再运行
ts的代码是无法直接去运行的需要将其编译成js文件(可以查看编译的js文件的样子)
安装一个插件 npm install -g typescript

测试版本号 tsc -version
2. 自动完成以上操作(学习推荐使用)
npm install -g ts-node 

# 类型
ts本身拥有所有的js类型但是也增加了一些类型
## 类型声明
1. 写法:在变量后面:类型
    - 但是在初始话的时候会根据你的初始值来判断类型
    - 不给初始化数据的话类型声明默认会是any,笑死最好的AnyScript,这样的话和js没有啥区别
2. any类型
    - 除了neve以外所有类型的顶层类型,允许你给变量赋任意值,但是不建议使用
    - 而且可以重新赋值不同的类型

3. unkown类型
    - 允许你给变量赋任意值,但是不建议使用
    - 但是你在将unknow类型变量赋值给其他变量的时候需要先判断类型(增加了类型检查相比与any增加了安全性)
    

4. 数组类型
  - js当中数组中的元素类型为any,数组当中有各种元素
  - ts当中优化了指定哪些类型,
    1. 联合类型|
    声明该变量可以是多种类型,变量类型使用|连接
    ```ts
    let arr: (number | string | boolean)[] = [1, 2, 3, '123', true];
    ```
    2. 指定第几个元素的类型
  ```ts
  let arr:[number,string,boolean] = [1,2,3,'123',true]
  ```

5. never类型
正常情况下不会遇到的,比如函数的返回值,
当遇到问题的时候,返回值类型为never类型
6. null类型和undefined类型
一般用于变量是有值的判断
## 类型存在的问题
1. 类型推断
当类型声明的时候,ts会根据初始化的值来判断类型
如果没有初始化值的话,然后去使用,在非严格模式下其实是type|undefined类型,但是严格模式下会报错


## 断言
1. 语法:<类型>变量(已弃用)
```ts
// 示例（旧版语法，包括TypeScript 2.x之前的版本）
let value: any = "Hello";
let strLength: number = (<string>value).length;
```
2. 语法:变量 as 类型
```ts
let value: any = "Hello"; // 假设value是从某个未知类型的地方获取的
let strLength: number = (value as string).length; // 我们知道value在这里是一个字符串，因此断言为string类型来访问length属性

// 或者
let maybeElement = document.getElementById("myId"); // 返回类型为 HTMLElement | null
let element = maybeElement as HTMLElement; // 断言它实际上是非null的HTMLElement类型
```

# 运算符
js当中有的运算符ts都有

## 独有的
1. 断言
    1. !断言
    ```ts
     //! 断言强制取消非空报错语法检查,但是真的为空的话还是会报错的
    let str:string |null= null;
    // str = "hello";
    let strLength:number = str!.length
    console.log(strLength);
    
    ```
    2. 可选连运算符(js在2020新增了该运算符)
    - 在type属性声明为可选属性的时候,可以使用可选连运算符,表示该属性在变量初始化的时候为可选
    - 在读取变量属性的时候,读取属性的属性的时候,如果前面一个属性为空就会报错但是使用可选运算符的话呢
    就不会报错,但是读取属性的时候如果为空就会返回undefined
    3. ??空值合并运算符
    如果当一个变量的值为null或者undefined的时候,使用??运算符,如果为null或者undefined的话就返回后面的值,否则返回前面的值
## 条件控制和循环
都和js相同

但是for in 语句的话呢,遍历的是对象的属性值默认类型是string不能去赋值其它类型


## 类

访问修饰符
1. public:公有,在类内部,类外部,子类当中都可以访问
2. private:私有,只在类内部可以访问,子类当中不可以访问
3. protected:受保护的,只在类内部,子类当中可以访问

一个类的话呢只能继承一个父类

子类可以修改父类继承过来的属性


## interface和type的区别
1. interface的话呢像是蓝图不能直接去使用的,接口本身是无法去继承接口的
- 可以实现多个接口
2. type
 可以给一些数据类型起一个别名
 之后再拿去用


## 泛型将类中的属性的类型决定权交给调用者
1. 在函数中使用
2. 在类当中使用
