import { cn } from "utils/cn";

export default function InteractionsIcon({ className }) {
  return (
    <svg
      aria-label="Interactions, review and delete likes, comments and your other interactions."
      className={cn("text-white", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>
        Interactions, review and delete likes, comments and your other
        interactions.
      </title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        x1="2.369"
        x2="22.25"
        y1="16.803"
        y2="16.803"
      />
      <polyline
        fill="none"
        points="17.322 11.855 22.25 16.803 17.322 21.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        x1="21.631"
        x2="1.75"
        y1="7.197"
        y2="7.197"
      />
      <polyline
        fill="none"
        points="6.678 12.145 1.75 7.197 6.678 2.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
