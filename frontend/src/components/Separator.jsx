import { cn } from "utils/cn";

export default function Separator({ straight = false, className }) {
  return (
    <div
      className={cn(
        !straight && "space-x-4",
        "flex items-center justify-center w-full"
      )}
    >
      <div className={cn("flex-1 flex-grow bg-separator h-[2px]", className)} />

      <span
        className={cn(
          straight ? "hidden" : "block",
          "text-xs text-tertiary font-semibold"
        )}
      >
        OR
      </span>

      <div className={cn("flex-1 flex-grow bg-separator h-[2px]", className)} />
    </div>
  );
}
