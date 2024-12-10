import { cn } from "utils/cn";

export default function HighlightsIcon({ className }) {
  return (
    <svg
      aria-label
      className={cn("text-white", className)}
      fill="currentColor"
      height={12}
      role="img"
      viewBox="0 0 24 24"
      width={12}
    >
      <title />
      <path
        d="M3.915 5.31q.337-.407.713-.779m-3.121 7.855Q1.5 12.194 1.5 12a10.505 10.505 0 0 1 .516-3.265m3.243 11.338a10.55 10.55 0 0 1-2.89-3.864m14.482 5.108a10.547 10.547 0 0 1-8.163.65M12.002 1.5a10.504 10.504 0 0 1 7.925 17.39"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
