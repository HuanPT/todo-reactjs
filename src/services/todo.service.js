import axios from "axios";

export const createTodos = (todo, token) => {
  return axios.post("https://todoapi-fawn.vercel.app/api/todos", todo, {
    headers: {
      Authorization: token,
    },
  });
};

export const updateTodo = (token, id, update) => {
  return axios.put(`https://todoapi-fawn.vercel.app/api/todos/${id}`, update, {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteTodo = (token, id) => {
  return axios.delete(`https://todoapi-fawn.vercel.app/api/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};
