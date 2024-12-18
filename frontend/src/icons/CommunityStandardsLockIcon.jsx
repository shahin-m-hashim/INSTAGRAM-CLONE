import { cn } from "utils/cn";

export default function CommunityStandardsLockIcon({ className }) {
  return (
    <svg
      aria-label="Shield icon"
      className={cn("text-white", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>Shield icon</title>
      <polyline
        fill="none"
        points="16.723 8.93 10.498 15.155 7.277 11.933"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.978"
      />
      <path
        d="M3 13.5a9 9 0 0 0 18 0V4.488A17.848 17.848 0 0 1 12 1.5a17.848 17.848 0 0 1-9 2.988Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.978"
      />
    </svg>
  );
}
