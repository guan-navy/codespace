import  { PureComponent } from 'react'


export default class ClassComponent extends PureComponent {
 constructor(props) {
    super(props)
    this.list =[
        {id:1,
        name:'react'},
        {id:2,
        name:'node'},
        {id:3,
        name:'mongo'},
    ]
  }
onDel(id){
    this.list = this.list.filter(item=>item.id!==id)
    console.log(this.list);
}
  render() {
    return (
      <div>
        <h2>这是一个类组件</h2>
        <ul>
            {this.list.map(item=><li key={item.id}>{item.name}<button onClick={()=>this.onDel(item.id)}>x</button></li>)}
        </ul>
      </div>
    )
  }
}
