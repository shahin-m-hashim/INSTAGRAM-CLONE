export default function MoreIcon({ className = "text-white" }) {
  return (
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
      aria-label="More options"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>More options</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
}
