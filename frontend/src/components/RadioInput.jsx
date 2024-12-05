import { cn } from "utils/cn";

export default function RadioInput({
  value,
  className,
  handleChecked,
  theme = "dark",
  isChecked = false,
}) {
  return (
    <input
      type="radio"
      value={value}
      checked={isChecked}
      onChange={handleChecked}
      className={cn(
        theme === "dark" ? "border-white" : "border-black",
        isChecked
          ? theme === "dark"
            ? "before:bg-white"
            : "before:bg-black"
          : "before:bg-transparent",
        "relative inline-block bg-transparent border rounded-full cursor-pointer custom-radio size-4 md:size-6",
        className
      )}
    />
  );
}
