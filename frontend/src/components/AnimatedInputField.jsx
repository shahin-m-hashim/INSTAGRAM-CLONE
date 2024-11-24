import { useState } from "react";
import { cn } from "../utils/cn";

/* eslint-disable react/prop-types */
export default function AnimatedInputField({
  name,
  value,
  setValue,
  placeholder,
  type = "text",
}) {
  const [showValue, setShowValue] = useState(false);

  return (
    <label htmlFor={name} className="relative w-full">
      <span
        className={cn(
          "pointer-events-none absolute inline-block left-2 transform text-[rgb(168,168,168)] transition-all duration-150 ease-in-out",
          value
            ? "text-[0.7em] -translate-y-1 top-1"
            : "text-xs -translate-y-1/2 top-1/2"
        )}
      >
        {placeholder}
      </span>
      <input
        id={name}
        name={name}
        value={value}
        type={showValue ? "text" : type}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "text-xs h-10 p-[0.625em] w-full rounded-sm focus:outline-none flex-1 border-[rgb(85,85,85)] text-[rgb(245,245,245)] border bg-[rgb(18,18,18)]",
          value ? "pb-0" : "pb-[0.625em]"
        )}
      />
      {type === "password" && value && (
        <button
          type="button"
          onClick={() => setShowValue((prev) => !prev)}
          className="absolute font-semibold transform -translate-y-1/2 top-1/2 right-2"
        >
          {showValue ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
