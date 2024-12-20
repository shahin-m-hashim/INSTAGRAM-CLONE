import { cn } from "utils/cn";

export default function HumanIcon({ className = "" }) {
  return (
    <svg
      aria-label="User icon"
      className={cn("text-primary", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>User icon</title>
      <path
        d="M2.667 22v-1.355a5.271 5.271 0 0 1 5.271-5.271h8.124a5.271 5.271 0 0 1 5.271 5.271V22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={12}
        cy="7.268"
        fill="none"
        r={5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}
