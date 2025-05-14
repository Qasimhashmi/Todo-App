import React, { useState } from "react";

const TodoForm = ({ onAdd, onCancelButtonClick }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
    onCancelButtonClick(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Task</h2>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="task-input-field"
          />
          <div className="modal-buttons">
            <button type="submit">Add Task</button>
            <button
              type="button"
              onClick={() => {
                onCancelButtonClick(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
