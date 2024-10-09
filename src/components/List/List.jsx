import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";
export default function List({ todos, removeTodo, editTodo }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
