import styles from "./ListItem.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function ListItem() {
  return (
    <li className={styles["list-item"]}>
      <p className={styles.title}>Read a book</p>
      <span className={styles.date}>Сегодня</span>

      <div className={styles.aciton}>
        <button className={styles.delete}>
          <MdDelete />
        </button>
        <button className={styles.edit}>
          <MdEdit />
        </button>
      </div>
    </li>
  );
}
