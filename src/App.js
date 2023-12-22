import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="TodoWrapper">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
