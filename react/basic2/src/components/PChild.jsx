import  { Component } from 'react'
import PropTypes from 'prop-types';
export default class PChild extends Component {
    state={
        msg: 'hello,来自子组件的数据'
    }
    handler=()=> {
        this.props.callback(this.state.msg)
    }
    static propTypes = {
        callback: PropTypes.func.isRequired,
      };
  render() {
    return (
      <div>
        <h4>子组件</h4>
        <button onClick={this.handler}>传递</button>
      </div>
    )
  }
  
  
}

