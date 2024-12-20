import { cn } from "utils/cn";

export default function AddProfilePhotoIcon({ className = "" }) {
  return (
    <svg
      aria-label="When you share photos, they will appear on your profile."
      className={cn("text-primary", className)}
      fill="currentColor"
      height={56}
      role="img"
      viewBox="0 0 96 96"
      width={56}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>When you share photos, they will appear on your profile.</title>
      <circle
        cx={48}
        cy={48}
        fill="none"
        r={47}
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <ellipse
        cx="48.002"
        cy="49.524"
        fill="none"
        rx="10.444"
        ry="10.476"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2.095"
      />
      <path
        d="M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
