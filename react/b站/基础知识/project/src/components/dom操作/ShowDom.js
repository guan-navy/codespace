import React, { Component } from 'react'
let div1  = React.createRef()
export default class ShowDom extends Component {
    componentDidMount() {
        console.log(div1.current);
    }
  render() {
    return (
      <>
      <div className='testDom' ref ={div1}></div>
      </>
    )
  }
}
 