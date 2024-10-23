import React from 'react'

export default function MemoHoc(UerCom) {
  return class WrappedComponent extends React.Component {
    // 实现简易的pureComponent
    // 浅比较
    shouldComponentUpdate(nextProps, nextState) {
      // 比较props
      for (let key in nextProps) {
        if (nextProps[key]!== this.props[key]) {
          return true;
        }
      }
      // 比较state
      for (let key in nextState) {
        if (nextState[key]!== this.state[key]) {
          return true;
        }
      }
      return false;
    }

    render() {
        
      return <>
      <UerCom {...this.props} />
      </>

    }
  };
}
