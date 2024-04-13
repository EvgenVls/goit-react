import { useState } from "react";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import initialTasks from "../../tasks.json";
import css from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
