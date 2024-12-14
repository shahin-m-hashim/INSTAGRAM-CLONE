import { Link } from "react-router-dom";
import InstagramTextIcon from "icons/InstagramTextIcon";

export default function NotFoundNavbar() {
  return (
    <nav className="fixed top-0 inset-x-0 p-4 border-b border-b-[rgb(54,54,54)]">
      <div className="flex justify-center">
        <ul className="md:w-[600px] lg:w-[800px] xl:w-[1200px] flex items-center gap-5 justify-between">
          <li>
            <InstagramTextIcon />
          </li>
          <li className="flex items-center gap-4 w-[170px]">
            <Link
              to="/accounts/login"
              className="flex-1 bg-[rgb(0,149,246)] text-center rounded-lg px-4 py-1"
            >
              Log In
            </Link>

            <Link
              to="/accounts/signup"
              className="flex-1 text-[rgb(0,149,246)] hover:text-white"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
