import { useState } from "react";
import styles from "./Form.module.css";
import { GoPlus } from "react-icons/go";

export default function Form({ createTodo, isTodoCreating }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.submit} disabled={isTodoCreating}>
        <GoPlus />
      </button>
      <input
        className={styles["form-input"]}
        type="text"
        placeholder="Add a to-do"
        value={value}
        onChange={handleChange}
        disabled={isTodoCreating}
      />
    </form>
  );
}
