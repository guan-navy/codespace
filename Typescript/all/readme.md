# 环境配置
初始化文件
npm init -y
安装
npm Typescript -d
配置文件
tsc -init 

# 插件

tsc ./index.ts 会将ts文件编译为js文件,后面需要手动运行js文件
tsc-node ./index.ts 会编译ts文件并运行js文件
- ts-node 在导入模块的ts文件编译的时候会报错换用 tsx
 安装:npm install --save-dev tsx
 运行:npx tsx ./script.ts

# 简历更新
1. 精通装饰器
2. 熟悉vue3源码当中的ts语法
# 学习的时候遇到的问题
1. 就是导入的时候模块不兼容问题,但是检查发现设置了的话,还有问题的可能是后缀没写的问题
2. ts当中常常会遇到自相矛盾的问题,这个时候记住这种写法就行了



# ts文件的编译问题
因为ts文件设置根目录之后,以及编译输出的目录之后,其他文件夹不允许有ts文件,所以需要设置tsconfig.json的exclude属性,将不需检查的文件夹添加进去

rootDir 表示ts所在的文件目录
outDir 表示编译后的文件目录
注意在其他目录下不允许有ts文件
target 表示编译之后的js的版本es2016表示编译为es6版本

# TS面试问题

1. 根类型
2. 两种单例模式
3. undefined可以赋值给哪些类型
4. 判断一个数据类型的方法Object.prototype.toString.call(data).slice(8, -1)
5. 如何使用自定义守卫判断promise类型呢
6. type S = string[]&string类型,付不了值,但是提示类型是可以交叉的
# 作业
1. 使用方法拦截器实现对所有类的方法的拦截
2. 使用继承关键字实现的继承,之后编译为js文件之后运行
3. 如何使用自定义守卫判断promise类型呢
4. 实现一个合并多个对象的方法
5. 使用infer获取到Set<Subject>中的Subject类型
6. 实现一个通用的获取所有对象类型方法  8-4.ts
7. 分析unwrapRef()方法处理响应式对象为数组的情况
```ts
type ObjTyp = {name:string,age:number};
type ObjKeysType<T extends object,K > = K extends keyof T?K:never
type TestObjKeysTyp = ObjKeysType<ObjTyp,'name'|'age'|'sex'>
```

8. 实现一个ts的深拷贝
9. [8-24](./allchapter/8chapter/src/8-24.ts)
在一个对象数组当中,每个对象有许多属性,但是我只要某几个属性然后组成的一个子数组

10. 对于omit底层实现代码的理解

