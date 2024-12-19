import { cn } from "utils/cn";
import { useState } from "react";
import SelectedIcon from "icons/SelectedIcon";

export default function CheckboxInput({
  id,
  className,
  value = "",
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

            {isChecked && <SelectedIcon />}
          </label>
        </>
      ) : (
        <>
          <label
            htmlFor={id}
            className={cn(
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

            {isChecked && <SelectedIcon className="size-full p-[2px]" />}
          </label>
        </>
      )}
    </>
  );
}
