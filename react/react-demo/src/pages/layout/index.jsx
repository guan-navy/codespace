// import React from 'react'
import { Layout } from "antd";
import "./index.css";
const { Header, Footer, Sider, Content } = Layout;

export default function LayoutWrap() {
    const data =[
        { id:1,title:'班级人员'},
        { id:2,title:'就业数据'},
        { id:3,title:'个人详情'},
    ]
  return (
    <div className="layout">
      <Layout>
        <Header className="hd">
          <h2>旅梦后台管理系统</h2>
          <p>欢迎</p>
        </Header>
        <Layout>
          <Sider className="sd">
            <ul>
{
     data.map((item)=>{
        return <li key={item.id} className="aside-item">{item.title}</li>
    })
}
            </ul>
               
            
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
