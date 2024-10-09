import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import SortButton from "./components/SortButton/SortButton";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isTodoCreating, setIsTodoCreating] = useState(false);
  const [refreshTdoos, setRefreshTodos] = useState(false);

  const [isSort, setIsSort] = useState(false);
  const tempTodos = [...todos];

  useEffect(() => {
    const obj = [{ title: "b" }, { title: "a" }, { title: "c" }];

    console.log(obj.sort((a, b) => (a.title > b.title ? 1 : -1)));

    setIsLoading(true);

    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .finally(() => setIsLoading(false));
  }, [refreshTdoos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const toSortMode = () => {
    if (isSort) {
      setRefreshTodos(!refreshTdoos);
    } else {
      setTodos((prev) => prev.sort((a, b) => (a.title > b.title ? 1 : -1)));
    }
    setIsSort(!isSort);
  };

  const createTodo = (value) => {
    if (value === "") return;
    setIsTodoCreating(true);

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: value,
        date: new Intl.DateTimeFormat().format(new Date()),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setRefreshTodos(!refreshTdoos);
      })
      .finally(() => {
        setIsTodoCreating(false);
      });
  };

  const removeTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => setRefreshTodos(!refreshTdoos));
  };

  const editTodo = (id, value) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: value,
        date: new Intl.DateTimeFormat().format(new Date()),
      }),
    })
      .then((res) => res.json())
      .then(() => setRefreshTodos(!refreshTdoos));
  };

  return (
    <>
      {isLoading && <div className={styles.laoder}></div>}
      {!isLoading && (
        <>
          <div className={styles.body}>
            <Form createTodo={createTodo} isTodoCreating={isTodoCreating} />
            <SortButton isSort={isSort} toSortMode={toSortMode} />
            {todos.length === 0 && (
              <div className={styles.message}>Записей не обнаружено...</div>
            )}
            <List todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
