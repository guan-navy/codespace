## 函数参数的解构

```ts
type TypStuobj = { usernanme: string; age: number };
function fn(stuObj: TypStuobj) {
  console.log(stuObj.usernanme, stuObj.age);
}
//解构的写法,我并不需要获取整个的一个对象

function fn1({ usernanme, age }: TypStuobj) {
  console.log(usernanme, age);
}
```

## interface 和 type 的区别

## 特殊的数组 元组

### 基本定义

1. 定义的时候每个元素的类型都确定
2. 元素值的数据类型必须是当前元素定义的类型
3. 元素的个数必须和定义的个数相同

```ts
let salary: [number, string, number, number] = [1000, "1000", 1000, 1000];
```

### 数组的元素如何变成只读的呢

```ts
const arry = [1, 2, 3] as const;
arry[0] = 2; //报错
```

### 可变元组

1. 定义:固定的部分+...any[](不固定的部分) 组成元组

```ts
let customers: [string, number, ...any[]] = ["Tom", 18];
customers = ["Tom", 18, "Male", 1];
//可变元组解构
let [name, age, ...rest] = customers;
```

2. 解构:解构的时候,固定部分必须和定义的固定部分一致,但是...any[](不固定的部分)使用...rest 来表示

3. 和数组一样的取值

### 可变元组标签 tag

```ts
//在结构的时候呢相当于说明文字说明变量的含义

let [name, age, ...rest]: [name: string, age: number, ...any[]] = ["Tom", 18];
```

## 类和静态属性

### 什么是类
类就是拥有相同属性和方法的一系列对象的集合
### 静态属性和方法
  1. 定义：
  静态属性和静态方法
  每一个实例对象访问到的该属性都是相同的
  2. 企业项目什么时候使用静态成员
## 单例模式
### 1. 立即创建
1. 定义：
```ts
class DateUtil1 {
    //日期工具类
    private constructor() {
      console.log("创建日期工具类...");
    }
    //立即创建单例模式
    static instance: DateUtil1 = new DateUtil1();
     formatDate() {}
     diffDateByDay() {} //两个日期之间的天数差
     duffDateByHour() {} //两个日期之间的小时差
     timeConversion() {}
  }
```
2. 静态对象属性的执行时机
内部创建一个讲台属性对象，这个对象是立即执行的，也就是同步代码
### 2. 懒汉模式
1. 定义：在我们想要一个单例的对象的时候再创建而不是一上来就创建

## 类的get 和set方法
### 定义
 get方法：用来获取属性值
set方法：用来设置属性值
### 应用场景：
1. 对对象的属性赋值时添加限定规则
2. 对象属性的赋值时添加日志记录
3. 给地址加上备注信息

## TS静态成员和方法拦截器

### 场景：
项目当中需要给所有的类的方法增加计算执行时间的功能该怎么做，如果项目非常大的话
