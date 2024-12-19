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
        disabled ? "opacity-70 pointer-events-none" : "pointer-events-auto",
        "rounded-lg text-button w-full text-sm flex items-center h-8 p-2 font-semibold justify-center gap-2 bg-link hover:bg-link-hover",
        className
      )}
    >
      {children}
    </button>
  );
}
