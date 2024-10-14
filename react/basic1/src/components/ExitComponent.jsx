
function ExitComponent() {
    let list =[
        {id:1,
        name:'react'},
        {id:2,
        name:'node'},
        {id:3,
        name:'mongo'},
    ]
    const onDel=(id) =>{
        //删除
        list = list.filter(item=>item.id!==id)
    }
  return (
    <div>
      <h4>这是一个额外的组件</h4>
      <ul>
        {
            list.map(item=>{
                return <li key={item.id}>{item.name}<button onClick={()=>onDel(item.id)}>x</button></li>
            })
        }
      </ul>
    </div>
  )
}



export default ExitComponent

