import React from "react";
import Styles from "./FormContent.module.css";

export default function FormContent({ children, isActive }) {
  const classes = isActive
    ? Styles.contentItem + " " + Styles.open
    : Styles.contentItem;
  return <div className={classes}>{children}</div>;
}
