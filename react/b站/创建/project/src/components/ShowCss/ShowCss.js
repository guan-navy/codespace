import React from "react";

import css from './ShowCss.module.css';
import classNames from 'classnames';
class ShowCSS extends React.PureComponent {
  state = {
    isPink: false,
    isPurple: false,
  };
  render() {
    return (
      <div>
        <h1>样式</h1>
        <div className="box">
          <div className={css.box1+' ' +css.font}>我是盒子1</div>
          <div className={css.box2}>我是盒子2</div>
        </div>
        <br />
        <br />
        <h1>动态类名测试</h1>
        <div className={classNames({
          [css.box1]:this.state.isPink,
          [css.box2]:this.state.isPurple
        })}>我是盒子3</div>
        <button onClick={()=>{
          this.setState({
            isPink:!this.state.isPink,
    
          })

        }}>切换pink</button>
        <button onClick={
          ()=>[
            this.setState({
              isPurple:!this.state.isPurple,
            })

          ]
        }>切换purple</button>

      </div>
    );
  }
}
export default ShowCSS;