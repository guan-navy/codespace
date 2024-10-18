import React from "react";

import css from './ShowCss.module.css';
class ShowCSS extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>样式</h1>
        <div className="box">
          <div className={css.box1+' ' +css.font}>我是盒子1</div>
          <div className={css.box2}>我是盒子2</div>
        </div>
      </div>
    );
  }
}
export default ShowCSS;