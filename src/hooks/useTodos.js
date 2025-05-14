import { useState, useEffect } from "react";
import fetchTodos from "../api/fetchTodos";
import toast from "react-hot-toast";

const useTodos = (limit) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTodos = async () => {
    const toastId = toast.loading("Loading todos...");
    try {
      const data = await fetchTodos(limit);
      setTodos(data);
      toast.success("Todos loaded", { id: toastId });
    } catch (err) {
      console.error("Failed to fetch todos:", err);
      toast.error("Failed to fetch todos", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, [limit]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return {
    todos,
    loading,
    handleAddTodo,
    handleToggle,
  };
};

export default useTodos;
