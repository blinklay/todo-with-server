import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoad(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Mistake to connect!" + " " + res.status);
        }

        return res.json();
      })
      .then((newData) => {
        console.log("data received >>> ", newData);
        setData([...data, newData]);
      })
      .catch((e) => {
        console.log(e.message);
        setIsError(e.message);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>task list</h1>
      {isError ? (
        <div>{isError}</div>
      ) : (
        <ul className={styles.list}>
          {isLoad ? (
            <div className={styles.loader}></div>
          ) : (
            data.map(({ id, title, completed }) => (
              <li key={id} className={styles.item}>
                <span>{title}</span>
                <span className={styles.completedTask}>
                  completed: {String(completed)}
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
