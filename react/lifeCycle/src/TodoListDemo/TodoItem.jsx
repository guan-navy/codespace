import { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {

  onDel = (index) => {
    this.props.cb(index)
  }
  static propTypes = {
   cb: PropTypes.func,
   list: PropTypes.array
  };
  render() {
    return (
      <ul>
        {
          this.props.list.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => this.onDel(index)}>x</button>
            </li>
          ))
        }
      </ul>
    )
  }
}