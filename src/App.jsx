import { useState } from "react";
import { Toaster } from "react-hot-toast";
import ItemList from "./components/itemLists";
import { FaTasks } from "react-icons/fa";
import TodoForm from "./components/todoForm";
import useTodos from "./hooks/useTodos";
import LoaderCat from "./assets/Loader.gif";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos, loading, handleAddTodo, handleToggle } = useTodos(10);

  return (
    <div className="todo-container">
      <div className="todo-title-container">
        <h1 className="todo-title">Task Tracker</h1>
        <FaTasks size={30} />
      </div>

      <ItemList
        todos={todos}
        onToggle={handleToggle}
        onAddButtonClick={() => setIsModalOpen(true)}
      />
      {loading && <img alt="Loader-Cat" src={LoaderCat} />}
      {isModalOpen && (
        <TodoForm
          onCancelButtonClick={() => setIsModalOpen(false)}
          onAdd={handleAddTodo}
        />
      )}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
