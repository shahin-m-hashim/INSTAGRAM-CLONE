import { cn } from "utils/cn";

export default function SavedIcon({ className = "" }) {
  return (
    <svg
      aria-label
      className={cn("text-primary", className)}
      fill="currentColor"
      height={18}
      role="img"
      viewBox="0 0 24 24"
      width={18}
    >
      <title />
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
