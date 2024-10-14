// import { Component } from 'react'


// export default class CChild extends Component {
//   state={

//   }
//   render() {
//     return (
//       <div>
//         <h2>子组件</h2>
//         <h2>CChild</h2>
//         <p>{this.props.msg}</p>
//       </div>
//     )
//   }
// }


// 函数式组件父向子传值

import PropTypes from 'prop-types';

function CChild(props) {
  return (
    <div>
      <h2>子组件</h2>
      <h2>CChild</h2>
      <p>{props.msg}</p>
    </div>
  );
}

CChild.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default CChild;

