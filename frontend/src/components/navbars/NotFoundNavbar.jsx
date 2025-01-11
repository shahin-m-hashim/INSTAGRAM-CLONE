import { Link } from "react-router-dom";
import TransitionLink from "components/TransitionLink";
import InstagramTextIcon from "icons/InstagramTextIcon";

export default function NotFoundNavbar() {
  return (
    <nav className="fixed inset-x-0 top-0 p-4 border-b border-b-tertiary">
      <div className="flex justify-center">
        <ul className="md:w-[600px] lg:w-[800px] xl:w-[1200px] flex items-center gap-5 justify-between">
          <li>
            <InstagramTextIcon />
          </li>
          <li className="flex items-center gap-4 w-[170px]">
            <TransitionLink
              to="/accounts/login"
              className="flex-1 py-1 text-center rounded-lg bg-link-primary hover:bg-link-primary-hover"
            >
              Log In
            </TransitionLink>

            <Link
              to="/accounts/signup"
              className="flex-1 font-semibold text-link-primary hover:text-link-primary-hover"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
