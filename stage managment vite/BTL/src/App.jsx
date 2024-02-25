import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks(prevTasks => [...prevTasks, formState]);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" value={formState.task} onChange={handleChange} placeholder="Add Task" />
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem 
          key={index} 
          item={item} 
          onDelete={(task) => setTasks(prevTasks => prevTasks.filter(t => t !== task))}
          onToggle={(task) => {
            setTasks(prevTasks => prevTasks.map(t => t === task ? {...t, completed: !t.completed} : t));
          }} 
        />
      ))}
    </>
  );
}

export default App;
  