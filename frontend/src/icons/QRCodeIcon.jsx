import { cn } from "utils/cn";

export default function QRCodeIcon({ className = "" }) {
  return (
    <svg
      aria-label
      className={cn("text-primary", className)}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title />
      <path
        d="M2 8.358v-1.23a5.807 5.807 0 0 1 .534-3.082 3.637 3.637 0 0 1 1.512-1.512A5.8 5.8 0 0 1 7.128 2h1.23m0 20h-1.23a5.807 5.807 0 0 1-3.082-.534 3.637 3.637 0 0 1-1.512-1.512A5.8 5.8 0 0 1 2 16.872v-1.23m20 0v1.23a5.807 5.807 0 0 1-.534 3.082 3.637 3.637 0 0 1-1.512 1.512 5.8 5.8 0 0 1-3.082.534h-1.23m0-20h1.23a5.807 5.807 0 0 1 3.082.534 3.637 3.637 0 0 1 1.512 1.512A5.8 5.8 0 0 1 22 7.128v1.23"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <rect
        fill="none"
        height={4}
        rx="1.111"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        width={4}
        x="5.998"
        y="5.995"
      />
      <rect
        fill="none"
        height={4}
        rx="1.111"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        width={4}
        x="13.998"
        y="5.995"
      />
      <rect
        fill="none"
        height={4}
        rx="1.111"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        width={4}
        x="5.998"
        y="13.995"
      />
      <rect
        fill="none"
        height={4}
        rx="1.111"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        width={4}
        x="13.998"
        y="13.995"
      />
    </svg>
  );
}
