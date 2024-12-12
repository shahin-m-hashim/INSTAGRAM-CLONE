import { cn } from "utils/cn";
import { useState } from "react";
import SelectedIcon from "icons/SelectedIcon";

export default function CheckboxInput({
  id,
  className,
  value = "",
  theme = "dark",
  checked = false,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => setIsChecked(!isChecked);

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
        value={value}
        type="checkbox"
        checked={isChecked}
        className="sr-only"
        onChange={handleChange}
      />

      {isChecked && (
        <SelectedIcon
          className={cn(
            theme === "dark" ? "text-white" : "text-black",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          )}
        />
      )}
    </label>
  );
}
