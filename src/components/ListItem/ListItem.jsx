import { useState } from "react";
import styles from "./ListItem.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";

export default function ListItem({ id, title, date, removeTodo, editTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const toEditMode = () => {
    setIsEdit(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    setValue(e.target.value);
  };

  return (
    <li className={styles["list-item"]}>
      {isEdit ? (
        <input
          type="text"
          className={styles.editField}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <p className={styles.title}>{title}</p>
      )}
      <span className={styles.date}>{date.toString()}</span>

      <div className={styles.aciton}>
        <button className={styles.delete} onClick={() => removeTodo(id)}>
          <MdDelete />
        </button>

        {!isEdit ? (
          <button className={styles.edit} onClick={toEditMode}>
            <MdEdit />
          </button>
        ) : (
          <button
            className={styles.done}
            onClick={() => {
              editTodo(id, value);
            }}
          >
            <MdFileDownloadDone />
          </button>
        )}
      </div>
    </li>
  );
}
