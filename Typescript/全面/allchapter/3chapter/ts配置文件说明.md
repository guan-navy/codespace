# 配置文件

## 组成 4 个最外层

"moduleResolution": "node10", //导入模块的查找方式  
 node 的查找方式从内往外来查找到根目录
classic 从外根目录往内查找
![alt text](image.png)

## 配置文件

```json
{
  "compilerOptions": {
    "declaration": false, //编译之后生成一个.d.ts文件用于描述导
    "module": "commonjs", //模块化方式
    "target": "es5", //编译之后的版本
    "sourceMap": false, //生成.js.map文件，在浏览器运行js文件的时候加载对应的ts文件在调试的时候更加加便捷
    //严格模式
    "noImplicitThis": true
  }, //编译选项
  "include": [],
  "exclude": [],
  "extends": ""
}
```
## 1. 编辑选项
### "allowJs": false,

1. 允许引入 js 文件，
2. 引入的 js 文件在编译的时候会一起放入到指定的文件夹中
3. 因为编译的话会将 js 文件一起编译，所以会检查 js 文件是否在根目录下

### "noImplicitAny": true,

1. 是否允许隐式 any 类型，
2. 对象属性是否能通过[变量名]的形式访问

```ts
function foo(x) {
  return x; //x,隐式具有any类型
}
let obj = { username: "wangwu", age: 23 };
let username = "username";
obj[username]; //会报错开启以后，因为对象的属性名是固定的，但是这里是一个变量
```

### "strictNullChecks": true,

空和 undefined 检查
关闭之后，空和 undefined 都可以赋值给任何类型

### "strictPropertyInitialization": true,

和上面的选项相互匹配,属性要求初始值
,关闭之后不报错
防止未初始化不报错:1. ?可选 2. ! 非空断言

### "noImplicitReturns": true,

#### 定义

未规定返回值的情况下,或者是非 void 类型
要求所有的函数路径都有返回值

### "removeComments": true,

编译之后额 ts 文件删除所有的注释 因为
一般情况下肯定是希望编译之后的 js 文件并不带注释

### "skipLibCheck": true /_ Skip type checking all .d.ts files. _/

.d.ts 文件内只有声明没有赋值检查的意义不大,一般都是跳过

### "typeRoots": ["node_modules/@types"], "types": ["lodash"],

#### 定义

第三方包的生命文件 目录 typeRoots
types 具体的第三方包名称
没有的话就无法导入第三方包

```shell
npm i lodash
# 生命文件
npm i @types/lodash -D
```

#### 注意

在导入的第三方包的时候呢,在 types 当中引入
,也可以只要引入 node,就行所有的第三方包都和 node 有关

### react 的 jsx 语法

### ts 的装饰器

### 快捷路径设置别名

#### 定义

工程目录 "baseUrl": "./",  
 别名对应的路径 "paths": {},

#### 注意
在编译之后呢想要再次支持该快捷方式的话,需要构件工具vite,webpack
或者使用第三方的插件
## 2. include选项
### 定义
 include 选项用于指定哪些文件或目录应被 TypeScript 编译器纳入编译范围。它定义了一个白名单，只有在此列表内的文件才会被编译器处理。
### 注意
 1. 如果未显式指定 include，TypeScript 会默认包括 tsconfig.json 所在目录及其所有子目录下的所有 .ts、.tsx、.d.ts 文件。
当您需要精确控制编译范围时，可以提供一个包含文件或目录路径的数组。同样支持相对路径、绝对路径及通配符。
 2. 任何被 files 或 include 指定的文件所引用的其他 TypeScript 文件也会自动被包含到编译范围内，除非这些引用的文件被明确地列入了 exclude。
## 3. extends
### 设置
 在 extends 字段中指定要继承的配置文件的路径，可以是相对路径（相对于当前 tsconfig.json 文件的位置）或绝对路径。
### 作用
 继承的配置文件中定义的 compilerOptions、include、exclude 等设置会被合并到当前配置文件中。如果有冲突，当前配置文件中的设置会覆盖继承来的设置。
### 好处
 使用 extends 可以更好地组织和管理复杂的项目结构，尤其是在大型项目或具有多种构建变体的情况下，可以保持配置的一致性和避免冗余。
## 4. exclude(了解就行)
exclude 选项允许您指定一组文件或目录路径，这些路径下的文件应被 TypeScript 编译器忽略，即不会被编译。通常用于明确排除不需要进行类型检查或编译输出的特定文件或目录。这有助于减少编译时间和避免不必要的编译错误。


多级目录的配置并不需要使用到这个选项
