import { cn } from "utils/cn";

export default function NewStoryIcon({ className = "" }) {
  return (
    <svg
      aria-label="Story"
      className={cn("text-primary", className)}
      fill="currentColor"
      height={22}
      role="img"
      viewBox="0 0 24 24"
      width={22}
    >
      <title>Story</title>
      <path
        d="M3.914 5.32q.338-.406.714-.778m-3.122 7.855a9.903 9.903 0 0 1-.007-.386 10.49 10.49 0 0 1 .517-3.265m3.242 11.337a10.568 10.568 0 0 1-2.89-3.864m14.482 5.109a10.535 10.535 0 0 1-8.162.649M12.001 1.51a10.505 10.505 0 0 1 7.926 17.392"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1={12}
        x2={12}
        y1="8.006"
        y2="16.006"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1={16}
        x2={8}
        y1="12.006"
        y2="12.006"
      />
    </svg>
  );
}
