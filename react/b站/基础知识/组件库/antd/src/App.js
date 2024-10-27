import { Button, Table } from "antd";

function App() {
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "3",
      name: "张三",
      age: 42,
      address: "翻斗花园1号",
    },

    {
      key: "4",
      name: "李四",
      age: 42,
      address: "翻斗花园1号",
    },
    {
      key: "5",
      name: "王五",
      age: 42,
      address: "翻斗花园1号",
    },
    

  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      render: (text) => <a href="URL_ADDRESS">{text}</a>,
    },
    {
      title: "操作",
      key: "action",

      render: (text, record) => {
        console.log('record',record)
        console.log('text',text)
        return(<span>
          <Button>删除</Button>
          <Button>编辑</Button>
        </span>)
        
      },
    },
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button type="primary">Primary</Button>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default App;
