import './App.scss';
import Container from './components/Container';
import FormToDo from './components/FormToDo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div>
        <FormToDo/>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
