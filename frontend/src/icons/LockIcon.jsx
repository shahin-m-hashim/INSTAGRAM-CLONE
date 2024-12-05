import { cn } from "utils/cn";
export default function LockIcon({ className }) {
  return (
    <svg
      role="img"
      width={96}
      height={96}
      viewBox="0 0 96 96"
      className={cn("text-white", className)}
      aria-label="Trouble logging in?"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Trouble logging in?</title>
      <circle
        r={47}
        cx={48}
        cy={48}
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M60.931 70.001H35.065a5.036 5.036 0 0 1-5.068-5.004V46.005A5.036 5.036 0 0 1 35.065 41H60.93a5.035 5.035 0 0 1 5.066 5.004v18.992A5.035 5.035 0 0 1 60.93 70ZM37.999 39.996v-6.998a10 10 0 0 1 20 0v6.998"
      />
    </svg>
  );
}
