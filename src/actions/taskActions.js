export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: "TOGGLE_TASK",
    payload: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "DELETE_TASK",
    payload: taskId,
  };
};

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};
