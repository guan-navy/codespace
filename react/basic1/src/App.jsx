import React from "react";
import ExitComponent from "./components/ExitComponent";
import ClassComponent from "./components/ClassComponent";
function App() {
  return <div className="App">
    <HelloWorld1></HelloWorld1>
    {HelloWorld1()}
    <HelloWorld2/>
    <div>
    <ExitComponent />
    <ClassComponent />
    </div>
    </div>;
}
function HelloWorld1() {
    const handler =(e)=>{
        console.log("按钮被点击",e);
    }
  return <div>这是函数组件
    <div>
        <button onClick={handler}>点击我</button>
    </div>
    </div>;
}
class HelloWorld2 extends React.Component{
 render(){
 return <div>这是类组件</div>;
}
}

export default App;
