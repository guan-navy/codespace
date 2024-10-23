import React from "react"
import Question from "./Question"

class life extends React.Component{
    constructor(props){
        super(props)
        this.state={
            a:1,
          
        }
        console.log('constructor');
        
        
    }
     static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps');
        
        return null
        }

    componentDidUpdate(){
        console.log("组件更新完毕")
    }
  
    render(){
        console.log("render")
        return(<div>
            <h2>生命周期{this.state.a}</h2>
            
            <button  onClick={
                ()=>{
                    this.setState({
                        a:this.state.a+1
                    })
                }
            }>更新父组件</button>
            <button onClick={
                ()=>{
                    this.setState({
                        a:1
                    })
                }
            }>测试state修改为相同数据的时候是否需要更新</button>
            <Question></Question>
        </div>)
        
    }
    componentDidMount(){
        console.log("组件挂载完毕")
    }
    shouldComponentUpdate(props,state){
       
        console.log("组件是否更新")
        console.log('修改前',this.state.a);
        console.log('修改后',state.a);

        
        return true
    }
}
export default life