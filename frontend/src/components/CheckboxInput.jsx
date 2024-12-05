import { cn } from "utils/cn";
import { useEffect, useState } from "react";
import SelectedIcon from "icons/SelectedIcon";

export default function CheckboxInput({
  className,
  value = "",
  theme = "dark",
}) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    if (checked) console.log(value);
  }, [checked]);

  return (
    <div className={cn("relative inline-block rounded-full size-6", className)}>
      <input
        value={value}
        type="checkbox"
        onChange={handleChange}
        className={cn(
          theme === "dark" ? "border-white" : "border-black",
          "relative inline-block bg-transparent border rounded-full cursor-pointer custom-checkbox size-full"
        )}
      />
      {checked && (
        <div className="absolute inset-0 pointer-events-none">
          <SelectedIcon
            className={theme === "dark" ? "text-white" : "text-black"}
          />
        </div>
      )}
    </div>
  );
}
