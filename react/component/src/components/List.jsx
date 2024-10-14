
import { PropTypes } from 'prop-types';
function List(props) {
    const arr = props.colors
    const list = arr.map((item, index) => {
        return (<li key={index}>{item.name}</li>)
    }) 
  return (
    <div>
      <h2>这是list组件</h2>
      <ul>{list}</ul>
    </div>
  )
}
// 
// const colors =[
//     {id:1,name:'红色'},
//     {id:2,name:'绿色'},
//     {id:3,name:'蓝色'}
//   ]
List.propTypes = {
   
    colors:PropTypes.array.isRequired
   
}

export default List

