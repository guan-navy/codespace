// import PropTypes from 'prop-types'

// function Page({page=10}) {
//   return (
//     <div>
//       props的默认值:{page}
//     </div>
//   )
// }
// //

// Page.propTypes = {
//     page:PropTypes.number
// }

// export default Page
import { Component } from "react";
import PropTypes from 'prop-types'

export default class Page extends Component {
  state = {};
static defaultProps = {//props的默认值
    page:10
}


static propTypes = {
    page: PropTypes.number.isRequired,
  };
  render() {
    return <div>props的默认值:{this.props.page}</div>;
  }

}
