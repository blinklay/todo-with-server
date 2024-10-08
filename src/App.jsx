import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <div className={styles.laoder}></div>}
      {!isLoading && (
        <>
          <div className={styles.body}>
            <Form />
            <List todos={todos} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
