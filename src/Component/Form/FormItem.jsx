import React from "react";
import Styles from "./FormItem.module.css";

export default function FormItem({ children, onClick, isActive }) {
  const classes = isActive ? Styles.item + " " + Styles.active : Styles.item;
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
