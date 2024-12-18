import { cn } from "utils/cn";
import { useState } from "react";
import SelectedIcon from "icons/SelectedIcon";

export default function CheckboxInput({
  id,
  className,
  value = "",
  theme = "dark",
  checked = false,
  type = "rounded",
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => setIsChecked(!isChecked);

  return (
    <>
      {type === "rounded" ? (
        <>
          <label
            htmlFor={id}
            className={cn(
              theme === "dark" ? "border-white" : "border-black",
              "inline-block border size-6 cursor-pointer rounded-full",
              className
            )}
          >
            <input
              id={id}
              name={id}
              value={value}
              type="checkbox"
              checked={isChecked}
              className="sr-only"
              onChange={handleChange}
            />

            {isChecked && (
              <SelectedIcon
                className={cn(
                  "size-full",
                  theme === "dark" ? "text-white" : "text-black"
                )}
              />
            )}
          </label>
        </>
      ) : (
        <>
          <label
            htmlFor={id}
            className={cn(
              theme === "dark"
                ? "bg-white border-white"
                : "bg-black border-white",
              "relative inline-block border size-6 cursor-pointer rounded-sm",
              className
            )}
          >
            <input
              id={id}
              name={id}
              value={value}
              type="checkbox"
              checked={isChecked}
              className="sr-only"
              onChange={handleChange}
            />

            {isChecked && (
              <svg
                aria-label
                role="img"
                width={10}
                height={10}
                fill="currentColor"
                viewBox="0 0 24 24"
                className={cn(
                  "size-full p-[2px]",
                  theme === "dark" ? "text-black" : "text-white"
                )}
              >
                <polyline
                  fill="none"
                  strokeWidth={3}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="21.648 5.352 9.002 17.998 2.358 11.358"
                />
              </svg>
            )}
          </label>
        </>
      )}
    </>
  );
}
