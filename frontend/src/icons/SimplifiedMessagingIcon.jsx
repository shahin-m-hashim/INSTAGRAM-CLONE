import { cn } from "utils/cn";

export default function SimplifiedMessagingIcon({ className = "" }) {
  return (
    <svg
      aria-label="Direct messaging icon"
      className={cn("text-primary", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>Direct messaging icon</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        x1={22}
        x2="9.218"
        y1={3}
        y2="10.083"
      />
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
