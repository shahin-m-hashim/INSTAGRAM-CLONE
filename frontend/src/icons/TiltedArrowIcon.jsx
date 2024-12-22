import { cn } from "utils/cn";

export default function TiltedArrowIcon({ className = "" }) {
  return (
    <svg
      aria-label="Press"
      style={{
        transform: "scaleX(-1) rotate(45deg)",
      }}
      className={cn("text-primary", className)}
      fill="currentColor"
      height={14}
      role="img"
      viewBox="0 0 24 24"
      width={14}
    >
      <title>Press</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1="2.909"
        x2="22.001"
        y1="12.004"
        y2="12.004"
      />
      <polyline
        fill="none"
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
