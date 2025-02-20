import { cn } from "utils/cn";

export default function HamburgerIcon({ className = "" }) {
  return (
    <svg
      role="img"
      width={24}
      height={24}
      fill="white"
      viewBox="0 0 24 24"
      className={cn("text-primary", className)}
      aria-label="Settings"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Settings</title>
      <line
        x1={3}
        y1={4}
        y2={4}
        x2={21}
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1={3}
        x2={21}
        y1={12}
        y2={12}
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1={3}
        x2={21}
        y1={20}
        y2={20}
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
