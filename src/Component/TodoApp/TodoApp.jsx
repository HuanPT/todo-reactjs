import React, { useState, useEffect } from "react";
import { createTodos } from "../../services/todo.service";
import Button from "../Button/Button";
import Input from "../Form/Input";
import useTodoApp from "../useTodoApp";
import { deleteTodo, updateTodo } from "../../services/todo.service";
import TodoList from "./TodoList";

import styles from "../../assets/css/TodoApp.module.css";

export default function TodoApp(/*{ credential, setCredential }*/) {
  const { credential, setCredential, todos, setTodos } = useTodoApp();
  const token = credential.token;
  const [todo, setTodo] = useState("");

  // handler event Submit
  const handleSubmit = () => {
    if (todo.trim() == "") alert("Hãy nhập giá trị vào!");
    const newTodo = {
      title: todo,
      completed: false,
    };

    // Add todo
    createTodos(newTodo, token)
      .then(({ data }) => {
        setTodos((prev) => [...prev, data]);
      })
      .catch((err) => console.log(err));
    setTodo("");
  };

  // Remove todo
  const handleRemove = (id) => {
    const newTodos = todos.filter((item) => item._id !== id);
    deleteTodo(token, id).catch((err) => console.log(err));
    return setTodos(newTodos);
  };

  const handleCheck = (id, update) => {
    updateTodo(token, id, update).catch((err) => console.log(err));
    const updatedTodos = todos.map((item) => {
      if (item._id === id) {
        return { ...item, ...update };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  console.log(todos);
  const handleRemoveAll = () => {
    const newTodos = [];
    todos.map((todo) => deleteTodo(token, todo.id));
    return setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => setCredential({ user: null, token: null })}>
        Logout
      </Button>

      <h1>Hello, {credential.user.displayName}</h1>

      {/* <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      /> */}

      <div style={{ display: "flex", alignItems: "center", paddingInline: 10 }}>
        <Input
          style={{
            minWidth: 350,
            height: "100%",
            lineHeight: 40,
            padding: 12,
            outline: "none",
            fontSize: 16,
          }}
          value={todo}
          onchange={(e) => setTodo(e.target.value)}
          placeholder="new todo..."
        />
        <Button onClick={handleSubmit} style={{ padding: 12, fontSize: 16 }}>
          Add new Todo
        </Button>
      </div>

      <TodoList
        list={todos}
        handleRemove={handleRemove}
        handleCheck={handleCheck}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
}
