import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.title.trim() === "") {
      alert("Title cannot be empty!");
      return;
    }

    addTask({ ...task, id: Date.now(), completed: false });
    setTask({ title: "", description: "" });
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit} className="TodoForm">
        <label className="label-container">
          Title
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="todo-input"
          />
        </label>
        <label className="label-container">
          Description
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="todo-input"
          />
        </label>
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addTask })(TaskForm);
