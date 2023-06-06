import React, { useState, useEffect } from "react";

export const EditTodo = ({ editTodo, editTask, task, todos }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="todo-input"
        />
        <button type="submit" className="todo-btn">
          Done
        </button>
      </form>
    </div>
  );
};
