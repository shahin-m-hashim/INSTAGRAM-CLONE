import { cn } from "utils/cn";

export default function MegaPhoneIcon({ className = "" }) {
  return (
    <svg
      aria-label="Ads icon"
      className={cn("text-white", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>Ads icon</title>
      <path
        d="M3.712 9.664a2.327 2.327 0 0 0-1.629 2.86h0a2.327 2.327 0 0 0 2.86 1.628s6.964-1.91 13.146-.022l-3.06-11.154C10.677 7.754 3.713 9.664 3.713 9.664Z"
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
        x1="20.952"
        x2={22}
        y1="7.348"
        y2="7.061"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1="18.988"
        x2="19.752"
        y1="4.404"
        y2="3.631"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        x1="20.765"
        x2="21.816"
        y1="10.882"
        y2="11.157"
      />
      <path
        d="M8.384 13.522a28.836 28.836 0 0 0 3.171 6.636l-3.107.866a28.343 28.343 0 0 1-3.255-6.93"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
