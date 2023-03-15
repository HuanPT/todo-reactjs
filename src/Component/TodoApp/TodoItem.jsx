import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "../../assets/css/TodoItem.module.css";
import Input from "../Form/Input";
import useTodoApp from "../useTodoApp";

export default function TodoItem({
  // children,
  index,
  removeTodo,
  check,
  id,
  title,
  onCheck,
}) {
  const [editIndex, setEditIndex] = useState(null);
  const [checked, setChecked] = useState(check);
  const [editTitle, setEditTitle] = useState(title);

  // checked and setCheked
  const handleClick = () => {
    setChecked((prev) => !prev);
    const update = {
      completed: !checked,
      title: editTitle,
    };
    onCheck(id, update);
    setEditIndex(null);
  };

  const handleDoneEdit = () => {
    const update = {
      completed: checked,
      title: editTitle,
    };
    onCheck(id, update);
    setEditIndex(null);
  };

  const handleEdit = () => {
    setEditIndex(index);
  };

  // const handleDone = () => {
  //   const update = { title: editTitle, completed: !checked };
  //   // Update the todo on the server
  //   updateTodo(token, id, update).then(() => {
  //     // Update the local state to reflect the new title
  //     onCheck(id, update);
  //     // Clear the edit state
  //     setEditTitle(editTitle);

  //   });
  // };
  console.log(editTitle);
  return (
    <>
      <li className={styles.TodoItem}>
        {editIndex === index ? (
          <>
            <Input
              style={{ minWidth: 300, padding: 10, outline: "none" }}
              defaultValue={editTitle}
              onchange={(e) => setEditTitle(e.target.value)}
            />
            <Button onClick={handleDoneEdit}>Done</Button>
          </>
        ) : (
          <>
            <label className={styles.item} htmlFor={id}>
              <Input
                type="checkbox"
                defaultChecked={checked}
                onchange={handleClick}
                id={id}
              />
              <p
                className={
                  checked ? `${styles.text} ${styles.active}` : `${styles.text}`
                }
              >
                {title}
              </p>
            </label>
            <div>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={removeTodo}>Delete</Button>
            </div>
          </>
        )}
      </li>
    </>
  );
}
