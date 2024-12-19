export default function DownloadIcon({ className = "" }) {
  return (
    <svg
      aria-label="Account history, review changes you've made to your account since you created it."
      className={className}
      fill="currentColor"
      height={24}
      role="img"
      viewBox="0 0 24 24"
      width={24}
    >
      <title>
        Account history, review changes you've made to your account since you
        created it.
      </title>
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
