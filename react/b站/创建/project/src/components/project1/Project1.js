import React from "react";

class Project1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableArr: [
                {
                    date: '2020-10-10',
                    Name: '订单1',
                    Status: '已完成'
                },
                {
                    date: '2020-10-10',
                    Name: '订单2',
                    Status: '未完成'
                },
                {
                    date: '2020-10-10',
                    Name: '订单3',
                    Status: '未完成'
                }
            ]
        }
    }
    render() {
        console.log('子组件更新');

        return (
            <div>
                <h2>增删改查</h2>
                <table>
                    <thead>
                        <tr>
                            <td>日期</td>
                            <td>订单名</td>
                            <td>订单状态</td>
                            <td>操作</td>
                            <td><button onClick={()=>{
                                this.setState({
                                    tableArr:this.state.tableArr.concat({
                                        date: '2020-10-10',
                                        Name: '订单4',
                                        Status: '未完成'
                                    })
                                })

                            }}></button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableArr.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Status}</td>
                                        <td>
                                            <button onClick={() => {
                                                let newArr = this.state.tableArr;
                                                newArr.splice(index, 1);
                                                this.setState({
                                                    tableArr: newArr
                                                })
                                            }}>删除</button>
                                            {/* 编辑 */}
                                            <button onClick={() => {
                                                let newArr = this.state.tableArr;
                                                newArr[index].Name = '订单4';
                                                this.setState({
                                                    tableArr: newArr
                                                })
                                            }}>编辑</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}
export default Project1;