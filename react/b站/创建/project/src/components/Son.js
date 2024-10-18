import React from "react";
import propTypes from 'prop-types'

class Son extends React.PureComponent{


    render(){
        return(
            <div>
                <h2>我是子组件</h2>
                <div>{this.props.a}</div>
                <div>这是作用域插槽</div>
                {this.props?.scopedSlot(1)}
            </div>
        )
    }

}

//校验类型
Son.propTypes={
    a:propTypes.string
}
//默认值
Son.defaultProps={
    a:'默认值'
}

export default Son;