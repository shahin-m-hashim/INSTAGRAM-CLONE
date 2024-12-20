import { cn } from "utils/cn";

export default function ArchivingAndDownloadingIcon({ className = "" }) {
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
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        x1="11.914"
        x2="11.914"
        y1="15.195"
        y2={2}
      />
      <polyline
        fill="none"
        points="16.013 11.095 11.914 15.195 7.814 11.095"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        x1="3.277"
        x2="20.55"
        y1={22}
        y2={22}
      />
    </svg>
  );
}
