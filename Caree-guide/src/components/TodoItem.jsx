import React from "react";
// import "../index.css";
import "../styles/TodoList.css"
function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todoitem">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
export default TodoItem;
