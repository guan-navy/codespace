#

快捷键
rfcp 快速创建函数式组件
rcc 快速创建类组件

2.  在 react 中类组件
    定义的普通函数的 this 指向默认是会丢失的
    也就是说需要使用箭头函数

3.  组件当中的状态必须要使用 state 命名
    使用 setState 方法修改状态

4.  双向绑定,受控表单组件

将 value 赋值为数据源 state
之后监听改动触发函数,将 state 中的数据源赋值为 value

5. 非受控表单组件
   组件的值 value 不受状态 state 控制

6. 父子组件传值

在 vue 当中呢不建议在子组件当中修改父组件的状态
react 的话呢只读不能改

数字对象字符串布尔值,不能传递 null,undefined
甚至可以传一段 html 语法

在类组件当中使用 this.props 来接受
在函数式组件当中使用 props 形参来接受

7. 兄弟组件之间通信
   就是通过父组件作为中间桥梁来传递数据

8. 跨层组件通信 provider comsumer
创建一个对象,解构provider comsumer,然后抛出
```js
import React from "react";
const { Provider, Consumer } = React.createContext();
export { Provider, Consumer };
```

只能父传子
