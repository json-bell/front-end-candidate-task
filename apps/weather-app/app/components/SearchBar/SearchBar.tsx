"use client";
import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useLocationChange } from "@/app/providers/WeatherDataContext/useLocationChange";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const onLocationChange = useLocationChange();
  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        // prevent navigation
        e.preventDefault();
        onLocationChange(searchValue);
      }}
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button type="submit">Go</button>
    </form>
  );
}
