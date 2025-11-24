"use client";
import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useLocationChange } from "@/app/providers/WeatherDataContext/useLocationChange";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const onLocationChange = useLocationChange();

  /** Basic loading indicator - ideally this is contained within the context/data,
   * but without a full loading state then has less use, and my goal is mostly to
   * show a user that the search has gone through
   */
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      className={styles.searchBar}
      onSubmit={async (e) => {
        // prevent navigation
        e.preventDefault();

        // Don't search if no value is present
        if (!searchValue) return;

        setSearchValue("");
        setIsLoading(true);
        try {
          await onLocationChange(searchValue);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        type="submit"
        aria-label="Search for weather data"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className={styles.loadingSpinner} />
        ) : (
          <img src={"/arrow.svg"} />
        )}
      </button>
    </form>
  );
}
