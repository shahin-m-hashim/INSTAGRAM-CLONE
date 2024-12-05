import { cn } from "utils/cn";
export default function SearchIcon({ className }) {
  return (
    <svg
      role="img"
      width={24}
      height={24}
      aria-label="Search"
      viewBox="0 0 24 24"
      className={cn("text-white", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Search</title>
      <path
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
      />
      <line
        x2={22}
        y2={22}
        fill="none"
        x1="16.511"
        y1="16.511"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
