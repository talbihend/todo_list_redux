import './App.css';
import AddNewCard from './Components/AddNewCard';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="nav"><h1 className="h1t">Welcome To Todo App</h1>
</div>
     <AddNewCard/>
     <TodoList/>
    </div>
  );
}

export default App;
