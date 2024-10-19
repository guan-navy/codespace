import React from "react";


class Son1 extends React.PureComponent{


    render(){
        return(
            <div>
                <h2>我是子组件</h2>
                <div>{this.props.a}</div>
                <input type="input" onInput={
                (e)=>{
                    this.props.changeMsg(e.target.value)
                }
                } />
               
            </div>
        )
    }

}



export default Son1