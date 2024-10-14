import  { Component } from 'react'
import PChild from './components/PChild'
export default class PApp extends Component {
    callback =(msg)=>{
console.log('拿到了子组件传递来的数据',msg);
    }
  render() {
    return (
      <div>
        <h2>PApp</h2>
        <PChild callback={this.callback}/>
      </div>
    )
  }
}
