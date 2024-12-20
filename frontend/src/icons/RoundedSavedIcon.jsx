import { cn } from "utils/cn";

export default function RoundedSavedIcon({ className = "" }) {
  return (
    <svg
      aria-label="Save"
      className={cn("text-primary", className)}
      fill="currentColor"
      height={62}
      role="img"
      viewBox="0 0 96 96"
      width={62}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Save</title>
      <circle
        cx={48}
        cy={48}
        fill="none"
        r={47}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M66 68.685 49.006 51.657a1.42 1.42 0 0 0-2.012 0L30 68.685V27h36Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
