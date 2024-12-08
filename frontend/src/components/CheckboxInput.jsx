import { cn } from "utils/cn";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (isChecked) console.log(value);
  }, [isChecked]);

  return (
    <label
      htmlFor={id}
      className={cn(
        "relative inline-block border border-white rounded-full size-6 cursor-pointer",
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
