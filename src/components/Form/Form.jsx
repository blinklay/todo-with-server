import styles from "./Form.module.css";
import { GoPlus } from "react-icons/go";

export default function Form() {
  return (
    <form className={styles.form}>
      <button className={styles.submit}>
        <GoPlus />
      </button>
      <input
        className={styles["form-input"]}
        type="text"
        placeholder="Add a to-do"
      />
    </form>
  );
}
