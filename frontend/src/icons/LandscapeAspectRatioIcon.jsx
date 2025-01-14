import { cn } from "utils/cn";

export default function LandscapeAspectRatioIcon({ className = "" }) {
  return (
    <svg
      aria-label="Crop landscape icon"
      className={cn("text-primary", className)}
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Crop landscape icon</title>
      <path d="M19 20H5a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v8a4.004 4.004 0 0 1-4 4ZM5 6a2.002 2.002 0 0 0-2 2v8a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"></path>
    </svg>
  );
}
