import { cn } from "utils/cn";

export default function FamilyCenterIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label=""
      className={cn("text-primary", className)}
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title />
      <path
        d="M3.504 21H3v-9.03l9-8.588 9.31 8.885a1 1 0 1 0 1.38-1.448l-10-9.543a1.001 1.001 0 0 0-1.38 0l-10 9.543c-.198.19-.31.45-.31.724V22a1 1 0 0 0 1 1h1.504a1 1 0 1 0 0-2Zm17.195-2h-2.403a2.804 2.804 0 0 0-2.8 2.8v.2a1 1 0 0 0 1 1H22.5a1 1 0 0 0 1-1v-.2c0-1.544-1.257-2.8-2.8-2.8ZM9.256 13.553a3.255 3.255 0 0 0 3.25 3.25c1.792 0 3.25-1.458 3.25-3.25s-1.458-3.25-3.25-3.25a3.255 3.255 0 0 0-3.25 3.25Zm10.242-.053a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-8.955 4.303a4.044 4.044 0 0 0-4.04 4.04v.357a.8.8 0 0 0 .8.8h6.376a2.965 2.965 0 0 1-.184-1v-.2c0-1.584.782-2.981 1.97-3.856-.32-.083-.65-.14-.997-.14h-3.925Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}
