import "./App.css";

import React from "react";
import Son from './components/Son';
import Son1 from './components/Son1';
import ShowCSS from './components/ShowCss/ShowCss';
import Life from './components/lifeCycle/Life';
// import Project1 from './components/project1/Project1'
import Son2 from "./components/context传值/Son2";
import ShowDom from "./components/dom操作/ShowDom";
import ShowFn from "./components/函数组件/ShowFn";
import TestHoc from "./components/高阶组件/TestHoc";
import Normal from "./components/高阶组件/Normal";
import MemoHoc from "./components/高阶组件/MemoHoc";
const ProcessedComponent =TestHoc(Normal)
// const ProcessedComponent = MemoHoc(Normal)


const testThis = () => {
  console.log(this);
};
// context传值
export let Context1 = React.createContext()

class App extends React.PureComponent {
  // 响应式数据
  state = {
    count: 0,
    show: true,
    origonArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    inputValue: "",
    selectedOptions: [],
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
      ],
      infoToSon:'',
      msg:'',
      passMsg:'父组件的消息'

  };
  foo(a, b) {
    console.log(a, b);

    console.log(this);

    console.log(123);
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  resonRenderFn() {
    if (this.state.show) {
      return <div>我是条件渲染</div>;
    } else {
      // 返回undefined，null，false都不会渲染

      return null;
    }
  }
  // 修改数组
  changeArr = () => {
    let newArr = [...this.state.origonArr];
    newArr.push(~~(Math.random() * 10));
    this.setState({
      origonArr: newArr,
    });
  };
  //
  handleChange=(event)=> {
    const value = event.target.value;
    const isChecked = event.target.checked;
    let selectedOptions = [...this.state.selectedOptions];
    if (isChecked) {
      selectedOptions.push(value);
    } else {
      selectedOptions = selectedOptions.filter(option => option!== value);
    }
    this.setState({
      selectedOptions,
    },()=>{
      console.log(this.state.selectedOptions);
    })
  }
  // 
  changeMsg=(newMsg)=>{
    console.log(this);
    console.log(newMsg);
    
    this.setState({
      msg:newMsg
    })
  }
  // 不能直接渲染对象，会报错
  render() {
    return (
      <div>
        <div>
          <div>{123}</div>
          <div>{"231"}</div>
          <button
            onClick={function () {
              console.log("123");
            }}
          >
            请狠狠按我
          </button>
          <button onClick={this.foo.bind(this)}>
            我是具名函数请狠狠地按我
          </button>
          <br />
          <button
            onClick={() => {
              console.log(this);
            }}
          >
            我是匿名函数请狠狠地按我
          </button>

          <button onClick={testThis}>我是全局函数testThis</button>
          <button onClick={this.foo.bind(this, 1, 2)}>
            用力按我触发函数传值
          </button>
          <br />
          <br />

          <button onClick={this.addCount}>
            请狠狠很按我，测试响应式{this.state.count}
          </button>
          <br />
          <br />
          <div>
            <h1>条件渲染</h1>
          </div>
          <div>{this.resonRenderFn()}</div>
          <button
            onClick={() => {
              this.setState({
                show: !this.state.show,
              });
            }}
          >
            {this.state.show ? "隐藏" : "显示"}
          </button>
        </div>
        <br />
        <br />
        <div><h1>列表渲染</h1></div>
        <div>
        <button onClick={this.changeArr}>{"点击添加数据"}</button>
        <div>
          {this.state.origonArr.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        </div>
        
        <br />
        <br />
        <div>双向绑定</div>
        <div>
        {this.state.inputValue}
        <input
          value={this.state.inputValue}
          type="input"
          onInput={(e) => {
            this.setState({
              inputValue: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.setState({
              inputValue: "test",
            });
          }}
        >
          {"设置初始值为:test"}
        </button>
        </div>
        <br />
        <br />
        <div>
        多选
        {this.state.options.map(option => (
          <div key={option.value}>
            <input
              onChange={this.handleChange}
              value={option.value}
              type="checkbox"
              name="test1"
              checked={this.state.selectedOptions.includes(option.value)}
            />
            {option.label}<br />
          </div>
        ))}
        <button onClick={()=>{
          this.setState({
            selectedOptions:['1','2','3']
          })
        }}>{'更改选中的数组为1,2,3'}</button>
      </div>
      <br />
      <br />
      <h1>父向子传值</h1>
      输入给子组件传递的值
      <input type="input" value={this.state.infoToSon} onChange={
        (e)=>{
          this.setState({
            infoToSon:e.target.value
          })
        }
      }/>
      
      <Son a={this.state.infoToSon} scopedSlot={(msg)=>{
        return  <div>
          <div>作用域插槽</div>
          {msg}
        </div>
      }}></Son>
      <br />
      <br />


      <div>
        <h1>子向父传值</h1>
        <div>这是父组件的变量msg的值{this.state.msg}</div>
       <Son1 changeMsg={this.changeMsg}></Son1>
      </div>

      <br />
      <br />
      <div>
        <h1>css</h1>
        <ShowCSS></ShowCSS>
      </div>
      <br />
      <br />
      <h1>生命周期组件</h1>
     <Life></Life>
      <br />
      <br />
      <h1>小项目</h1>

      {/* <Project1></Project1> */}
      <br />
      <br />
      <h1>Dom操作</h1>
      <ShowDom></ShowDom>
      <br />
      <br />
      <h1>context传值</h1>
      <Context1.Provider value={this.state.passMsg}>
      <Son2></Son2>
      </Context1.Provider>
      
      <br />
      <br />
      <h1>函数组件</h1>
      <ShowFn></ShowFn>
      <br />
      <br />

      <h1>高阶组件</h1>
      <ProcessedComponent></ProcessedComponent>
      </div>
    );
  }
}

export default App;
