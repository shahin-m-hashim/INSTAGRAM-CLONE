import { cn } from "utils/cn";

export default function MobileAppIcon({ className = "" }) {
  return (
    <svg
      aria-label=""
      className={cn("text-primary", className)}
      fill="currentColor"
      height="20"
      role="img"
      viewBox="0 0 24 24"
      width="20"
    >
      <title></title>
      <path d="M21 16h-2.138a3.98 3.98 0 0 0-7.716 0H3a1 1 0 0 0 0 2h8.146a3.98 3.98 0 0 0 7.716 0H21a1 1 0 0 0 0-2Zm-5.996 3.001a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2ZM3 8h2.139a3.98 3.98 0 0 0 7.716 0H21a1 1 0 0 0 0-2h-8.145a3.98 3.98 0 0 0-7.716 0H3a1 1 0 0 0 0 2Zm5.997-2.999a2 2 0 1 1-2 2 2.003 2.003 0 0 1 2-2Z"></path>
    </svg>
  );
}
