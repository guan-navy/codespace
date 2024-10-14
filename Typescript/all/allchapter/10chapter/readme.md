# 认识装饰器
## 1. 定义 
装饰器就是一个方法或者是函数,可以注入到类,方法属性,参数,对象上,扩展功能 
## 2. 解决的问题
解决在不修改原来类,方法,属性,参数的时候为其添加额外的功能

比如为整个项目的所有业务类的所有方法都增加日志信息,一个一个增加的话工作量太大,后期修改的话,也要一个一个来也很麻烦

使用和创建分离是依赖注入的核心思想

## 3.分类
类,属性,方法,参数,元数据

## 4. 元数据装饰器

1. 元数据
元数据就是描述类方法或者对象的数据
2. 需要引入第三方库

## 5. 写法

1. 调用不传参的
2. 装饰器工厂


# 类装饰器

## 环境
1. 安装第三方包

npm i concurrently -s

2.  修改配置文件
消除装饰器警告
```ts
  "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    "emitDecoratorMetadata": true,  
```
3. 安装nodemon
    npm i nodemon -g
4. 解决编译装饰器的问题
    在tsc 命令之后添加-- target es5 -w --experimentalDecorators 
