import { cn } from "utils/cn";

export default function GrowthToolsIcon({ className = "" }) {
  return (
    <svg
      aria-label="Insights icon"
      className={cn("text-primary", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>Insights icon</title>
      <rect
        fill="none"
        height="9.091"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        width="6.667"
        x={2}
        y="12.909"
      />
      <rect
        fill="none"
        height="14.545"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        width="6.667"
        x="15.333"
        y="7.455"
      />
      <rect
        fill="none"
        height={20}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        width="6.667"
        x="8.667"
        y={2}
      />
    </svg>
  );
}
