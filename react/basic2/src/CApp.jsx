import CChild from "./components/CChild"
import { Component} from'react'
export default class CApp extends Component {
    state={msg:"父组件传值给子组件"}
  render() {
    return (
      <div>
        <h2>父组件</h2>
       <CChild msg={
        this.state.msg
       } /> 
      </div>
    )
  }
}


