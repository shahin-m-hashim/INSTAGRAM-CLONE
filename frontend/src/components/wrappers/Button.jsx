import { cn } from "../../utils/cn";

export default function Button({
  onClick,
  children,
  reference,
  className,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      ref={reference}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        disabled ? "opacity-70" : "opacity-100",
        "rounded-lg text-button w-full text-sm flex items-center h-8 p-2 font-semibold justify-center gap-2 bg-link-primary hover:bg-link-primary-hover",
        className
      )}
    >
      {children}
    </button>
  );
}
