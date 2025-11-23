"use client";
import { useContext, useMemo } from "react";
import { DataContext } from "./DataContext";
import { type LocationChangeHandler } from "./types";

export const useLocationChange = (): LocationChangeHandler => {
  const { onLocationChange } = useContext(DataContext);
  // memoize the handler that never changes to avoid re-rendering the search bar
  const memoizedHandler = useMemo(() => onLocationChange, []);
  return memoizedHandler;
};
