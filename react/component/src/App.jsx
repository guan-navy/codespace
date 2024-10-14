import List from './components/List'
import Page from './components/Page'
function App() {
  const colors =[
    {id:1,name:'红色'},
    {id:2,name:'绿色'},
    {id:3,name:'蓝色'}
  ]
  return (
    <div>
      <h2>app这是根组件</h2>
      <List colors={colors} />
      <Page />
    </div>
  )
}



export default App

