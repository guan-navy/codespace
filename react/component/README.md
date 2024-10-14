# 组件传值的类型


1. 传值的校验
1) 分类
isrequired表示这个参数是父组件必须传递给子组件
```js
//函数式组件校验
import PropTypes from 'prop-types'
List.propTypes = {
    colors: PropTypes.string.isRequired
}
//类组价参数校验
class List extends Component {
    static propTypes = {
        colors: PropTypes.string.isRequired
    }
}
```

2) 一些特殊的类型
这里表示需要必须要传递一个对象
然后对象里面的字属性也是可以通过reauired限制的
```js
import PropTypes from 'prop-types'
List.propTypes = {
    colors: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }).isRequired
}
```


2. 传值的默认值
1) 函数式
```js
import PropTypes from 'prop-types'

function Page({page=10}) {
  return (
    <div>
      props的默认值:{page}
    </div>
  )
}
//

Page.propTypes = {
    page:PropTypes.number
}

export default Page
```
2) 类组件
```js
static defaultProps = {//props的默认值
    page:10
}
static propTypes = {
    page: PropTypes.func.isRequired,
  };
  ```



# 学到的一些其他的点
1. 对于这种写法还是比较惊讶的
直接展开了这个数组当中的内容  
```js
function List(props) {
    const arr = props.colors
    const list = arr.map((item, index) => {
        return <li key={index}>{item}</li>
    }) 
  return (
    <div>
      <h2>这是list组件</h2>
      <ul>{list}</ul>
    </div>
  )
}
```

2.  报错
在jsx当中的{}当中不能写对象

