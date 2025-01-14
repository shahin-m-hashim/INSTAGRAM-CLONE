import { cn } from "utils/cn";

export default function GroupedPostsIcon({ type = "solid", className = "" }) {
  return (
    <>
      {type === "solid" ? (
        <svg
          className={cn("text-primary", className)}
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
        >
          <title>Carousel</title>
          <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
        </svg>
      ) : (
        <svg
          aria-label="Open media gallery"
          className={cn("text-primary", className)}
          fill="currentColor"
          height={16}
          role="img"
          viewBox="0 0 24 24"
          width={16}
        >
          <title>Open media gallery</title>
          <path
            d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </>
  );
}
