import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";
export default function List({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <ListItem />
      ))}
    </ul>
  );
}
