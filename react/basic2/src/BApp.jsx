import BrotherA from "./components/BrotherA";
import BrotherB from "./components/BrotherB";
import { Component } from "react";
import { Provider } from './provider'

class BApp extends Component {
  state = { message: "hello" };
  fn = (msg) => {
    console.log("这是父组件的打印bapp", msg);
    this.setState({ message: msg });
  };
  render() {
    return (
      <Provider value={this.state.message}>
        <div>
          <h2>BApp</h2>
          <BrotherA cb={this.fn} />
          <BrotherB message={this.state.message} />
        </div>
      </Provider>
    );
  }
}
export default BApp;
