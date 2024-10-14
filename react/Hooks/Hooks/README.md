# Hooks
让函数组件更加强大的钩子
- hooks只能在函数组件当中使用
- useState不能放在if语句或者是for循环语句当中去使用,除非定义变量的关键词是var
但是我们现在的话呢已经不会再去写var了
1. useState
- 为函数组件提供状态,响应式变量
- useState会缓存上一次的数据
- 第一个为状态,第二个是改变状态的函数,而且该函数还是异步函数

```js
import { useState } from "react"
//变量的名字可以随便叫
 const [count, setCount] = useState(10)//初始化值
```
setCount()触发之后会重新渲染组件,但是状态的值并不会被赋值为新的值

2. useEffect
    副作用函数,给一个变量添加副作用函数,当该变量变化的话副作用函数会执行
    - 默认组件加载执行一次,如果第二个参数没有给的话当组件中只要有有状态变更导致组件重新渲染,该函数会重新执行

    - 第二个参数[参数1,参数2... ]
    如果第二个参数改变的话,effect就会执行
    设置为空数组的话就表示不需要执行
    第二个参数

    - 可以充当生命周期
    1) 组件更新componentDidUpdate() 本身的意思就是组件更新
    2) 组件挂载componentDidmounte() 一开始默认就会执行一次在组件挂载的时候,给第二个参数为[]就行
    3) 组件卸载componentWillUnmount() return ()=>{}会在组件卸载的时候执行

3. useRef
创建一个对象变量能够存储dom结构

4. createContext
创建一个独立的js文件内部擦使用钩子函数创建对象,使用该对象在父组件提供数据,
子组件通过使用useContext使用该对象接受数据
用于跨层级的数据共享


- 存在的bug
当变量更新就会触发组件重新渲染,多次点击产生多个定时器


副作用函数清除定时器
 return ()=>{}

```js
   useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },2000)
    },[count]);
```
# 学到的其他的点

展示变量一般展示的字符串数组,不能展示布尔值


useState()后面也可以接上回调函数,类似的vue当中的computed
