#
## 函数的重载
### 重载场景:7-1.ts
当函数的参数类型不同时,函数内部对应多个类型返回值,这样需要我们去判断,增加复杂度

### 组成
重载签名和实现签名组成
1. 重载签名没有具体的实现,名字相同,参数不同,返回值无关,可以相同可以不同
2. 实现签名有具体的实现


## 泛型工厂函数类型

### 类的双重身份
构造函数类型,用于引出后面的装饰器
1. 一种类型
2. 构造函数

## 泛型工厂函数应用为所有的类提供一个构造器 7-10.ts
减少重复代码
为对象创建的时候增加一个创建成功语句


## 交叉类型和通用交叉方法
### 交叉类型 &
```ts
type S = string[] & string; //这个应该是bug,交叉之后的类型还是string[] & string
type S2 = string&number //两个没有关系的类型,交叉之后是never
```
### 通用交叉方法
#### 对象合并
1. 使用泛型:
这个场景当中使用泛型,因为相同类型不能交叉
2. 使用es5的语法可读性更强
#### 额外的知识
因为{}是任何对象的祖先类型可以断言为任何类型除了undefined和null


