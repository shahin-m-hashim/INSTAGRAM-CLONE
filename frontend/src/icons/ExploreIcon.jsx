/* eslint-disable react/prop-types */
export default function ExploreIcon({ className = "text-white" }) {
  return (
    <svg
      role="img"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-label="Explore"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Explore</title>
      <polygon
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
      />
      <polygon
        fillRule="evenodd"
        fill="currentColor"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      />
      <circle
        r="10.5"
        cx="12.001"
        cy="12.005"
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
