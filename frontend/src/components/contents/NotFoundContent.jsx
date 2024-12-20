import { Link } from "react-router-dom";

export default function NotFoundContent() {
  return (
    <div className="flex flex-col gap-5 text-center">
      <h1 className="text-lg font-bold md:text-2xl">
        Sorry, this page isn&apos;t available.
      </h1>
      <p>
        <span className="text-tertiary">
          The link you followed may be broken, or the page may have been
          removed.&nbsp;
        </span>

        <Link to="/" className="text-tertiary hover:text-tertiary">
          Go back to Instagram.
        </Link>
      </p>
    </div>
  );
}
