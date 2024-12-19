import { cn } from "utils/cn";

export default function ToggleSwitch({
  id,
  handleChange,
  pillClassName,
  ballClassName,
  isChecked = false,
}) {
  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={isChecked}
        className="sr-only"
        onChange={handleChange}
      />
      <div
        className={cn(
          isChecked ? "bg-pill-on" : "bg-pill-off",
          "relative h-6 transition-colors duration-200 rounded-full w-11",
          pillClassName
        )}
      >
        <div
          className={cn(
            isChecked ? "translate-x-[22px]" : "translate-x-[2px]",
            "absolute bg-primary top-1/2 size-5 rounded-full -translate-y-1/2 transform transition-all duration-200",
            ballClassName
          )}
        />
      </div>
    </label>
  );
}
