import  { Component, createRef } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  inputRef = createRef()
  state = {
    list: ['html', 'css', 'js'],
    inputVal: ''
  }

  handlerChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      inputVal: e.target.value
    })
  }
  //添加输入的信息到数组当中去
  handlerClick = () => {
    
    this.setState({//该方法会响应式的更新状态
      list: [...this.state.list, this.inputRef.current.value],
      inputVal:''
    })
    
  }

  handlerDel = (index) => {
    console.log(index);
    let arr = this.state.list
    //原数组开始删除index位置的元素，删除1个元素
    arr.splice(index, 1)
    this.setState({
      list: arr
    })
  }


  render() {
    return (
      <div>
        <header>
          {/* <input type="text" value={this.state.inputVal} onChange={this.handlerChange} /> */}
          <input type="text" ref={this.inputRef} value={this.state.inputVal} onChange={this.handlerChange} />
          <button onClick={this.handlerClick}>提交</button>
        </header>

        <section>
          {/* 将list数组和更改该数组的方法传给子组件TodoItem */}
          <TodoItem list={this.state.list} cb={this.handlerDel}/>
        </section>
      </div>
    )
  }
}