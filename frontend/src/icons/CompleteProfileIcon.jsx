import { cn } from "utils/cn";

export default function CompleteProfileIcon({ className }) {
  return (
    <svg
      aria-label="Add your name and bio so friends can find you."
      className={cn("text-white", className)}
      fill="currentColor"
      height={56}
      role="img"
      viewBox="0 0 96 96"
      width={56}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Add your name and bio so friends can find you.</title>
      <circle
        cx={48}
        cy={48}
        fill="none"
        r={47}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M57.996 37.999a10 10 0 1 1-10-10.001 10 10 0 0 1 10 10Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M64.998 65.999v-1.622A10.375 10.375 0 0 0 54.622 54h-13.25a10.374 10.374 0 0 0-10.375 10.376v1.622"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
