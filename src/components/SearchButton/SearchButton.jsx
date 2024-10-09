import styles from "./SearchButton.module.css";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchButton({ toSearch }) {
  return (
    <button className={styles.search} onClick={toSearch}>
      <IoSearchSharp />
    </button>
  );
}
