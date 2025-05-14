import axios from "axios";

const fetchTodos = async (limit) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};

export default fetchTodos;
