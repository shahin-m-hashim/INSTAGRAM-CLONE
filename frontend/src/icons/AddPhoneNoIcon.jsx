import { cn } from "utils/cn";

export default function AddPhoneNoIcon({ className = "" }) {
  return (
    <svg
      role="img"
      width={56}
      height={56}
      fill="currentColor"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      aria-label="Add your phone number so you can reset your password, find friends and more."
    >
      <title>
        Add your phone number so you can reset your password, find friends and
        more.
      </title>
      <circle
        cx={48}
        cy={48}
        fill="none"
        r={47}
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M50.432 50.427a18.888 18.888 0 0 0 4.176-6.246 3.283 3.283 0 0 0-.157-2.765l-1.024-1.92a3.464 3.464 0 0 1-.263-2.645c1.431-4.648 5.304-8.82 7.624-11.007a2.967 2.967 0 0 1 3.841-.247 36.26 36.26 0 0 1 3.94 3.616 5.136 5.136 0 0 1 1.427 3.344c.341 9.107-5.669 18.228-12.438 24.996-6.768 6.77-15.889 12.78-24.996 12.438a5.135 5.135 0 0 1-3.344-1.427 36.261 36.261 0 0 1-3.616-3.94 2.967 2.967 0 0 1 .247-3.84c2.186-2.32 6.36-6.194 11.007-7.625a3.464 3.464 0 0 1 2.644.263l1.921 1.024a3.283 3.283 0 0 0 2.765.157 18.888 18.888 0 0 0 6.246-4.176Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}
