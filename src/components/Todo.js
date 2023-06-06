import React from "react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleCompleteToggle = () => {
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  const handleEdit = () => {
    editTodo(task, task.id);
  };

  return (
    <div className={`Todo ${task.completed ? "completed" : ""}`}>
      <p onClick={handleCompleteToggle}>{task.task}</p>
      <div>
        <button id="todo-btn" onClick={handleEdit}>Edit</button>
        <button id="todo-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
