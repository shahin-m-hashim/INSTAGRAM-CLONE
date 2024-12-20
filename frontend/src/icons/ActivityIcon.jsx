import { cn } from "utils/cn";

export default function ActivityIcon({ className = "" }) {
  return (
    <svg
      aria-label="Ads activity icon"
      className={cn("text-primary", className)}
      fill="currentColor"
      height={96}
      role="img"
      viewBox="0 0 96 96"
      width={96}
    >
      <title>Ads activity icon</title>
      <polyline
        fill="none"
        points="17 50.002 33.191 50.002 40.681 24.769 49.735 71.769 58.791 38.128 64.096 50.002 80 50.002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <circle
        cx={48}
        cy={48}
        fill="none"
        r={47}
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}
