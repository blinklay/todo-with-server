import styles from "./SortButton.module.css";

export default function SortButton({ toSortMode, isSort }) {
  return (
    <button
      onClick={toSortMode}
      className={`${styles.sort} ${isSort ? styles.active : ""}`}
    >
      A-z
    </button>
  );
}
