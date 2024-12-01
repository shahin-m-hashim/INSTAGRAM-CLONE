import { cn } from "utils/cn";

/* eslint-disable react/prop-types */
export default function Separator({ straight = false, height = "2px" }) {
  return (
    <div
      className={cn(
        !straight && "space-x-4",
        "flex items-center justify-center w-full"
      )}
    >
      <div
        style={{ height }}
        className="flex-1 flex-grow bg-[rgb(38,38,38)]"
      ></div>
      <span
        className={cn(
          straight ? "hidden" : "block",
          "text-xs text-[rgb(168,168,168)] font-semibold"
        )}
      >
        OR
      </span>
      <div
        style={{ height }}
        className="flex-1 flex-grow bg-[rgb(38,38,38)]"
      ></div>
    </div>
  );
}
