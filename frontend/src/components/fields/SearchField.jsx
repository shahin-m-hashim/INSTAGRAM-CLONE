import { cn } from "utils/cn";
import CrossIcon from "icons/CrossIcon";
import SearchIcon from "icons/SearchIcon";
import { useEffect, useState } from "react";

export default function SearchField({ className }) {
  const [state, setState] = useState({
    value: "",
    isFocused: false,
  });

  useEffect(() => {
    // Simulate search query request to backend
  }, [state.value]);

  const handleFocus = () => setState((prev) => ({ ...prev, isFocused: true }));

  const handleBlur = () => setState((prev) => ({ ...prev, isFocused: false }));

  const handleChange = (e) =>
    setState((prev) => ({ ...prev, value: e.target.value }));

  const handleClear = () => setState({ value: "", isFocused: false });

  return (
    <div className={cn("relative w-full h-10", className)}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        value={state.value}
        onBlur={handleBlur}
        placeholder="Search"
        onFocus={handleFocus}
        onChange={handleChange}
        className="bg-[rgb(54,54,54)] text-xs text-[rgb(245,245,245)] focus:outline-none h-full px-10 focus:px-3.5 w-full rounded-md"
      />
      <div
        className={cn(
          state.isFocused ? "hidden" : "flex",
          "absolute inset-y-0 items-center left-3"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <SearchIcon className="text-[rgb(168,168,168)] size-4" />
        </div>
      </div>
      <button
        type="button"
        onClick={handleClear}
        className={cn(
          state.value ? "flex" : "hidden",
          "absolute inset-y-0 items-center right-3"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <CrossIcon className="size-4" />
        </div>
      </button>
    </div>
  );
}
