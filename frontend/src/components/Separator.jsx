import { cn } from "utils/cn";

/* eslint-disable react/prop-types */
export default function Separator({ straight = false }) {
  return (
    <div
      className={cn(
        !straight && "space-x-4",
        "flex items-center justify-center w-full"
      )}
    >
      <div className="flex-1 flex-grow h-[2px] bg-[rgb(38,38,38)]"></div>
      <span
        className={cn(
          straight ? "hidden" : "block",
          "text-xs text-[rgb(168,168,168)] font-semibold"
        )}
      >
        OR
      </span>
      <div className="flex-1 flex-grow h-[2px] bg-[rgb(38,38,38)]"></div>
    </div>
  );
}
