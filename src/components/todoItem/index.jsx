import React from "react";

const TodoItem = ({ todo, index, onToggle }) => {
  const isCompleted = todo.completed;
  return (
    <tr>
      <td>{index}</td>
      <td>{todo.title}</td>
      <td>
        <button
          className={`status-btn ${isCompleted ? "completed" : "pending"}`}
          onClick={() => onToggle(todo.id)}
        >
          {isCompleted ? "Completed" : "Pending"}
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
