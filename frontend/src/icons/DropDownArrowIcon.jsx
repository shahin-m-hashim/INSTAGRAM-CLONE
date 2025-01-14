import { cn } from "utils/cn";

export default function DropDownArrowIcon({ className = "" }) {
  return (
    <svg
      role="img"
      width={12}
      height={12}
      viewBox="0 0 24 24"
      className={cn("text-primary", className)}
      aria-label="Down chevron icon"
    >
      <title>Down chevron icon</title>
      <path
        fill="currentColor"
        d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"
      />
    </svg>
  );
}
