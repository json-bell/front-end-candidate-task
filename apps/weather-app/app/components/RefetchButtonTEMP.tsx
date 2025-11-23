"use client";
import { useContext } from "react";
import { DataContext } from "../providers/WeatherDataContext/DataContext";

let fetched = 0;

export default function RefetchButton() {
  const { onLocationChange, data } = useContext(DataContext);

  return (
    <>
      <button
        onClick={() => {
          onLocationChange("Worthing");
          fetched++;
        }}
      >
        Go to Worthing {fetched}
      </button>
      data:
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
