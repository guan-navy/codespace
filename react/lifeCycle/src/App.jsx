// import PropTypes from 'prop-types'
import Life from "./components/Life";
import TodoList from './TodoListDemo/TodoList';

function App() {

  return (
    <div>
      <Life />
      <h2>这是一个TodoListDemo</h2>
      
      <TodoList />
    </div>
  );
}

App.propTypes = {};

export default App;
