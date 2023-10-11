import { TaskList } from "./components/TaskList";
import Header from './components/Header'
import './App.css'

const Tasks = [
  {name:"Buy a new gaming laptop"},
  {name:"Complete a previous task"},
  {name:"Create video for Youtube"},
  {name:"Create a new portafolio site"}
];

function App() {
  return (
    <div className="App">
      <Header title="Todo App"/>
      <TaskList list={Tasks} />
    </div>

  );
}

export default App
