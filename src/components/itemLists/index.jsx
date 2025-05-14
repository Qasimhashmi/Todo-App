import React from "react";
import TodoItem from "../todoItem";
import { IoMdAdd } from "react-icons/io";

const ItemList = ({ todos, onToggle, onAddButtonClick }) => {
  return (
    <div className="todo-table-container">
      <div className="table-header">
        <h2>Todo List</h2>
        <button
          className="add-task-button"
          onClick={() => {
            onAddButtonClick(true);
          }}
        >
          <IoMdAdd />
          Add Task
        </button>
      </div>
      <table>
        <thead className="table-columns">
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              index={index + 1}
              todo={todo}
              onToggle={onToggle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
