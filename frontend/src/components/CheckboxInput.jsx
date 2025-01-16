import { cn } from "utils/cn";
import SelectedIcon from "icons/SelectedIcon";

export default function CheckboxInput({
  id = "",
  value = "",
  className = "",
  isRounded = true,
  isChecked = false,
  handleChange = () => {},
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-block size-6 cursor-pointer",
        isChecked ? "border-none" : "border-2 border-tertiary",
        isRounded ? "rounded-full" : "rounded-sm",
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

      {isChecked && <SelectedIcon isRounded={isRounded} />}
    </label>
  );
}
