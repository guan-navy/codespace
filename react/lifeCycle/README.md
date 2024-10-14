# 生命周期

- 挂载阶段
1. constructor()
2. render()挂载前
3. componentDidMount()挂载完成

- 更新阶段
在更新页面之后会调用触发render()函数
之后再触发掉componentDidUpdate()

- 卸载阶段
1. componentWillUnmount()

- 特殊
1. shouldComponentUpdate(){
    return true;
}
相当于一个开关,控制组件是否更新
2. getSnapshotBeforeUpdate(prevProps, prevState){
    return null;
}
在最近一次的渲染输出前调用 
返回值被传递给componentDidUpdate()
