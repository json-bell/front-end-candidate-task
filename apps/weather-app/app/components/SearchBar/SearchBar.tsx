"use client";
import { useState } from "react";
import styles from "./SearchBar.module.scss";

// interface SearchBarProps {
//   _?: never;
// }

export default function SearchBar(/* {  }: SearchBarProps */) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form className={styles.searchBar}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSearchValue("");
        }}
      >
        Go
      </button>
    </form>
  );
}
