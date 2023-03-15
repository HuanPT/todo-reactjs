import React from "react";
import Styles from "./Button.module.css";
export default function Button({ children = "Button", onClick,style }) {
  return (
    <button className={Styles.btn} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
