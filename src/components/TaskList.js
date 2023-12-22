import React from "react";
import { connect } from "react-redux";
import { toggleTask, deleteTask, setFilter } from "../actions/taskActions";

const TaskList = ({ tasks, toggleTask, deleteTask, filter, setFilter }) => {
  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );
  return (
    <>
      <div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul className="Todo_container">
        {filteredTasks.map((task) => (
          <li key={task.id} className="Todo">
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className="title-container"
            >
              <h5>{task.title}</h5>
              <p>{task.description || "No description"}</p>
            </span>
            <div className="btns-container">
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "InCompleted" : "Completed"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    filter: state.tasks.filter,
  };
};

export default connect(mapStateToProps, { toggleTask, deleteTask, setFilter })(
  TaskList
);
