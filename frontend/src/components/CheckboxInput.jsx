import { cn } from "utils/cn";
import { useState } from "react";

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
              <svg
                role="img"
                aria-hidden="true"
                viewBox="0 0 512 512"
                data-icon="check-circle"
                className={cn(
                  "size-full",
                  theme === "dark" ? "text-white" : "text-black "
                )}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                />
              </svg>
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
