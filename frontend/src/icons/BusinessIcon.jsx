import { cn } from "utils/cn";

export default function BusinessIcon({ className }) {
  return (
    <svg
      aria-label="Business icon"
      className={cn("text-white", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>Business icon</title>
      <path
        d="M20.102 10.853v8.96a1.333 1.333 0 0 1-1.333 1.334H5.436a1.333 1.333 0 0 1-1.333-1.333v-8.961"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M9.658 21.147V16.31a1.333 1.333 0 0 1 1.333-1.333h2.223a1.333 1.333 0 0 1 1.333 1.333v4.837M2.1 8.372a2.5 2.5 0 0 0 5 0m0 0a2.5 2.5 0 0 0 5 0m0 0a2.5 2.5 0 0 0 5 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M17.1 8.372a2.5 2.5 0 0 0 5 0V6.158l-2.685-3.305H4.785L2.1 6.158v2.214"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
