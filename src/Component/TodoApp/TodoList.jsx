import React from "react";
import Button from "../Button/Button";
import TodoItem from "./TodoItem";
import Styles from "../../assets/css/TodoList.module.css";

export default function TodoList({
  list,
  handleRemove,
  handleCheck,
  handleRemoveAll,
}) {
  if (list.length > 0) {
    const item = list.map((item, i) => (
      <TodoItem
        index={i}
        id={item._id || item.id}
        check={item.completed}
        key={item._id || item.id}
        removeTodo={() => handleRemove(item._id || item.id)}
        title={item.title}
        onCheck={handleCheck}
      />
    ));

    return (
      <>
        <ul className={Styles.list}>{item}</ul>
        {list.length > 1 && (
          <Button onClick={handleRemoveAll}>Xóa tất cả</Button>
        )}
      </>
    );
  }
}
