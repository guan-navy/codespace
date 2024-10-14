import {List,Tag} from 'antd';
import PropTypes from 'prop-types'

export default function TodoItem(props) {
  TodoItem.propTypes = {
    
    list:PropTypes.array.isRequired,
    delList:PropTypes.func.isRequired
  }

 

  return (
    <div>
       
       <List
       bordered
    itemLayout="horizontal"
    dataSource={ props.list}
    renderItem={(item,index) => (
      <List.Item>
        {item.title}
        <Tag color="blue" style={{cursor:' pointer'}} onClick={()=>{
          props.delList(index)
        }}>删除</Tag>
      </List.Item>
    )}
  />
    </div>
  )
}
