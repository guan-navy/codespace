
import './App.css';

import React from 'react';
const testThis=()=>{
  console.log(this);
}
class App extends React.Component {

  // 响应式数据
  state ={
   count:0
  }
 foo(a,b){
  console.log(a,b);
  
  console.log(this);
  
  
  console.log(123);
  
 }
addCount=()=>{
  this.setState(
    {
      count:this.state.count+1
    }
  )
}
  // 不能直接渲染对象，会报错
  render(){
    return (
      <div>
        <div>
          <div>{123}</div>
          <div>{'231'}</div>
          <button onClick={function(){
            console.log('123');
          }}>请狠狠按我</button>
          <button onClick={this.foo.bind(this)}>我是具名函数请狠狠地按我</button><br />
          <button onClick={()=>{
            console.log(this);
            
          }}>我是匿名函数请狠狠地按我</button>

          <button onClick={testThis}>我是全局函数testThis</button>
          <button onClick={this.foo.bind(this,1,2)}>用力按我触发函数传值</button><br /><br />
                                        
          <button onClick={this.addCount}>请狠狠很按我，测试响应式{this.state.count}</button>
        </div>
        
      </div>
      
        );
  }
 
}

export default App;
