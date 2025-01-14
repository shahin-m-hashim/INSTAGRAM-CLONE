import { cn } from "utils/cn";

export default function SelectCropIcon({ className = "" }) {
  return (
    <svg
      role="img"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-label="Select crop"
      className={cn("text-primary", className)}
    >
      <title>Select crop</title>
      <path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
    </svg>
  );
}
