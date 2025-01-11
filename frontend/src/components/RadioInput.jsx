import { cn } from "utils/cn";

export default function RadioInput({
  id,
  name,
  value,
  className,
  handleChange,
  isChecked = false,
}) {
  return (
    <div
      className={cn(
        "relative border-secondary inline-block border rounded-full size-6 cursor-pointer",
        className
      )}
    >
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className="absolute inset-0 z-10 opacity-0"
      />

      <div className="absolute inset-0 p-1">
        <div
          className={cn(
            "size-full rounded-full",
            isChecked ? "bg-secondary" : "bg-transparent"
          )}
        />
      </div>
    </div>
  );
}
