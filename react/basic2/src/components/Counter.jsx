
import  { Component } from 'react'

export default class Counter extends Component {
    state={   //组件当中的状态必须要使用state命名
        count:0
    }
    setCount=()=>{ //触发视图更新
        this.setState(
            {count:this.state.count+1}
        )//继承到component的方法
    }
  render() {
    return (
      <div>
        <button onClick={this.setCount}>计数器--{this.state.count}</button>
      </div>
    )
  }
}


