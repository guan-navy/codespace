import  { Component } from 'react'

export default class inputComponent extends Component {
    state ={
        message:'这是受控表单组件'
    }
    changeHandler = (e)=>{
        this.setState({
            message:e.target.value
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <input type="text" value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}
