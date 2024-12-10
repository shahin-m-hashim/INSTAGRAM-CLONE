import { useState } from "react";
import { cn } from "utils/cn";

export default function RadioInput({
  id,
  value,
  className,
  theme = "dark",
  checked = false,
}) {
  const checkedBg = theme === "dark" ? "bg-white" : "bg-black";

  const [isChecked, setIsChecked] = useState(checked);

  const handleChecked = () => setIsChecked(!isChecked);

  return (
    <label
      htmlFor={id}
      className={cn(
        theme === "dark" ? "border-white" : "border-black",
        "relative inline-block border rounded-full size-6 cursor-pointer",
        className
      )}
    >
      <input
        id={id}
        name={id}
        type="radio"
        value={value}
        checked={isChecked}
        className="sr-only"
        onChange={handleChecked}
      />

      <div className="absolute inset-0 p-1">
        <div
          className={cn(
            "size-full rounded-full",
            isChecked ? checkedBg : "bg-transparent"
          )}
        />
      </div>
    </label>
  );
}
