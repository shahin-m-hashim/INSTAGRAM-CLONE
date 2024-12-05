import { cn } from "utils/cn";

export default function CloseIcon({ className }) {
  return (
    <svg
      width="1em"
      height="1em"
      color="#9a9a9a"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("text-white", className)}
    >
      <path d="m13.414 12 7.293-7.293a1 1 0 1 0-1.414-1.414L12 10.586 4.707 3.293a1 1 0 1 0-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 1 0 1.414 1.414L12 13.414l7.293 7.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z"></path>
    </svg>
  );
}
