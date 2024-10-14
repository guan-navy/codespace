import { Input, Button } from "antd";
import TodoItem from "./TodoItem";
import { useState } from 'react';

import { useEffect } from "react";
export default function TodoList() {
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
      const [list,setList] = useState(data)
      const [inputVlue,setInputVlue]=useState("")
      const delList  = (index)=>{
         const newList = [...list]
          newList.splice(index,1)
          setList(newList)
      }
      useEffect(() => {
        console.log(list); // 在状态更新后输出完整的数组
      }, [list]); // 仅在list状态发生变化时执行
  return (
    <div>
      <header style={{ display: "flex" ,width:"500px" }}>
        <Input placeholder="请输入你的todos" value={inputVlue} onChange={(e)=>{
            setInputVlue(e.target.value)
        }} />
        <Button onClick={()=>{
            // 添加数据到数据源当中
            // 这里如果使用变量的赋值的话呢，数据源不会更新,
            //下面的这段代码setList使用之后因为地址值是相同的会导致页面不更新
            // let arr = list;arr.push({title:inputVlue});setList(arr)
            setList([...list,{title:inputVlue}]);
            setInputVlue("")
           
        }}>Add</Button>
      </header>
      <section>
        {/*父组件通过props向子组件传递数据*/}
 
        <TodoItem list={list} delList={delList} />
      </section>
    </div>
  );
}
