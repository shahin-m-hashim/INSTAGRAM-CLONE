import { cn } from "utils/cn";
import { useState } from "react";
import CrossIcon from "icons/CrossIcon";
import SearchIcon from "icons/SearchIcon";

export default function SearchField({ showIcon = true, className }) {
  const [field, setField] = useState({
    value: "",
    showInput: false,
  });

  const handleChange = (e) =>
    setField((prev) => ({ ...prev, value: e.target.value }));

  const handleClear = () =>
    setField({
      value: "",
    });

  return (
    <label htmlFor="search" className="relative w-full">
      {field.showInput ? (
        <>
          <input
            id="search"
            type="text"
            name="search"
            autoComplete="off"
            value={field.value}
            placeholder="Search"
            onChange={handleChange}
            className={cn(
              "flex items-center gap-2 w-full h-10 px-4 text-sm rounded-md outline-none bg-tertiary",
              className
            )}
          />

          {field.value && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 flex items-center right-3"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <CrossIcon className="size-4" />
              </div>
            </button>
          )}
        </>
      ) : (
        <div
          onClick={() => setField((prev) => ({ ...prev, showInput: true }))}
          className={cn(
            "flex items-center gap-2 w-full h-10 px-4 text-sm rounded-md outline-none bg-tertiary",
            className
          )}
        >
          {showIcon && (
            <div className="flex flex-col items-center justify-center h-full">
              <SearchIcon className="text-primary size-4" />
            </div>
          )}
          <span>Search</span>
        </div>
      )}
    </label>
  );
}
