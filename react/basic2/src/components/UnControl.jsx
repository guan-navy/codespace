import  { Component,createRef } from 'react'

export default class UnControl extends Component {
    msgRef=createRef() //创建了一个存放DOM的容器
    changeHandler=()=>{
        console.log(this.msgRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.changeHandler}>提交</button>
      </div>
    )
  }
}
