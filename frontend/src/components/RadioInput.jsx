import { cn } from "utils/cn";
import { useState } from "react";

export default function RadioInput({ id, value, className, checked = false }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChecked = () => setIsChecked(!isChecked);

  return (
    <label
      htmlFor={id}
      className={cn(
        "relative border-primary inline-block border-2 rounded-full size-6 cursor-pointer",
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
            isChecked ? "bg-secondary" : "bg-transparent"
          )}
        />
      </div>
    </label>
  );
}
