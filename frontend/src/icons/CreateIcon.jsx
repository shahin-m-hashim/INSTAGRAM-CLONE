import { cn } from "utils/cn";

export default function CreateIcon({ className = "" }) {
  return (
    <svg
      role="img"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={cn("text-primary", className)}
      aria-label="New post"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>New post</title>
      <path
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
      />
      <line
        x1="6.545"
        fill="none"
        x2="17.455"
        y1="12.001"
        y2="12.001"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        y1="6.545"
        fill="none"
        x1="12.003"
        x2="12.003"
        y2="17.455"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
