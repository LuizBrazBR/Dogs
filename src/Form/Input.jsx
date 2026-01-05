import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, id, erro, onBlur, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
      />
      {erro && <p className={styles.error}>{erro}</p>}
    </div>
  );
};

export default Input;
