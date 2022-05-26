import './App.css';
import ToDoList from './Components/ToDoList'

function App() {
  return (
    
    <div>
      <div className='header'>
        <h1>ToDo List</h1>
      </div>
      <div className="ToDo-List-container">
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App;
