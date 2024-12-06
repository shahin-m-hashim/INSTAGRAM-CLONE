import { cn } from "../../utils/cn";

export default function Button({
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
      disabled={disabled}
      className={cn(
        disabled ? "opacity-70 pointer-events-none" : "pointer-events-auto",
        "rounded-lg w-full text-sm flex items-center h-8 p-2 font-semibold justify-center text-white gap-2 bg-[rgb(0,149,246)] hover:bg-[#1877f2]",
        className
      )}
    >
      {children}
    </button>
  );
}
