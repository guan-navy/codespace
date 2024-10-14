import { createRef } from 'react';
import  { Component } from 'react'

export default class Life extends Component {
    constructor(props) {
      super(props)
      console.log('组件开始加载',this.ref);
      this.state = {
        count:0
      }
      this.ref = createRef()
      
    }
    componentDidMount() {
        console.log('组件挂载完成相当于onMounted',this.ref);
    }
    componentDidUpdate() {
        console.log('组件更新完成,相当于onUpdated');
    }
    componentWillUnmount() {
        console.log('组件将要卸载,相当于onUnmounted');
    }
  render() {
    console.log('组件jsx的语法开始编译,此时拿不到dom结构,相当于vue挂载前',this.ref);
    return (
      <div>
        <h2 ref={this.ref}>life组件</h2>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>{this.state.count}</button>
      </div>
    )
  }
}


