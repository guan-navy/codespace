import React from "react";
import debounce from "../../utils/debounce";
import { getList } from "../../api/goodsApi";
const debounceSearchFn = debounce(() => {
    console.log('300ms后执行');
}, 500)
const statusMap = {
    '已完成': {
        msg: '已完成',
        color: 'green'
    },
    '未完成': {
        msg: '未完成',
        color: 'red'
    },
    '进行中': {
        msg: '进行中',
        color: 'blue'
    },
}
const arrData = [
    {
        date: '2020-10-10',
        Name: '订单1',
        status: '1'
    },
    {
        date: '2020-10-10',
        Name: '订单2',
        status: '0'
    },
    {
        date: '2020-10-10',
        Name: '订单3',
        status: '2'
    }
]
class Project1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableArr: [],
            search: {
                date: '',
                name: '',
                status: ''
            }
        }

    }
    showStatus(status) {
        return <span style={
            {
                color: statusMap[status].color
            }
        }>
            {statusMap[status].msg}
        </span>
    }
    async componentDidMount() {
        console.log('子组件挂载');
        
        const data = await getList(this.state.search);

        console.log(data.data.data);
        this.setState({
            tableArr: data.data.data
        })
       
        
    }

    render() {
        console.log('子组件更新');

        return (
            <div>
                <h2>增删改查</h2>
                <div>
                    <div>
                        查询条件
                        <br />
                        {

                            Object.keys(this.state.search).map((item, index) => {
                                return (
                                    <span key={index}>
                                        {item}:{this.state.search[item]}
                                    </span>
                                )
                            })

                        }
                    </div>
                    <label >日期</label>
                    <input type="text" value={this.state.search.date} onInput={
                        (e) => {

                            this.setState({
                                search: {
                                    ...this.state.search,
                                    date: e.target.value
                                }
                            }, debounceSearchFn)
                        }
                    } />
                    <label >订单名</label>
                    <input value={this.state.search.Name} type="text" onInput={
                        (e) => {

                            this.setState({
                                search: {
                                    ...this.state.search,
                                    name: e.target.value
                                }
                            }, () => {
                                debounceSearchFn()
                            })
                        }
                    } />
                    <label htmlFor=""
                    >状态筛选</label>
                    <select
                        value={this.state.search.Status}
                        onChange={
                            (e) => {

                                this.setState({
                                    search: {
                                        ...this.state.search,
                                        status: e.target.value
                                    }
                                }, () => {
                                    debounceSearchFn()
                                })
                            }
                        }
                    >
                        {
                            Object.keys(statusMap).map((item, index) => {
                                return (
                                    <option key={index} value={item}>{statusMap[item].msg}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={
                        debounceSearchFn
                    }>新增</button>
                    <button onClick={
                        () => {
                            this.setState({
                                search: {
                                    date: '',
                                    name: '',
                                    status: ''
                                }
                            })
                        }
                    }>重置搜索</button>
                    <button onClick={
                        async () => {
                            const params = {
                               ...this.state.search,
                                // status: this.state.search.status===''?'':Number(this.state.search.status)
                            }

                            const data = await getList(params);
                            console.log(this.state.search);
                            
                            console.log(data.data.data);
                            
                            this.setState({
                                tableArr: data.data.data
                            })
                        }
                    }>搜索</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>日期</td>
                            <td>订单名</td>
                            <td>订单状态</td>
                            <td>操作</td>
                            <td><button onClick={() => {
                                this.setState({
                                    tableArr: [...arrData]
                                })

                            }}>还原数据</button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableArr.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.name}</td>
                                        <td>{this.showStatus(item.status)}</td>
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