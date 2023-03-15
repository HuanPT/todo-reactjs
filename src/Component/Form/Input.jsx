import React from "react";
import styles from "../../assets/css/Input.module.css";
export default function Input({
  label,
  type = "text",
  value,
  name,
  style,
  placeholder,
  onchange,
  defaultValue,
  defaultChecked,
  id,
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        style={style}
        type={type}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onchange}
        id={id}
      />
    </div>
  );
}
