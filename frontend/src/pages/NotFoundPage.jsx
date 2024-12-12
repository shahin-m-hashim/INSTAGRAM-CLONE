import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Button from "components/wrappers/Button";
import InstagramTextIcon from "icons/InstagramTextIcon";
import SplashScreen from "components/wrappers/SplashScreen";

const isAuthenticated = true;

export default function NotFoundPage() {
  return (
    <SplashScreen>
      <div className="h-screen text-white bg-black">
        {!isAuthenticated && (
          <nav className="p-4 w-full h-[10vh] border-b border-b-[rgb(54,54,54)]">
            <div className="flex justify-center">
              <ul className="md:w-[600px] lg:w-[800px] flex items-center gap-5 justify-between">
                <li>
                  <InstagramTextIcon />
                </li>
                <li className="flex items-center gap-4 w-[170px]">
                  <Button className="flex-1 px-4">Log In</Button>
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
        )}

        <div
          style={{
            height: isAuthenticated ? "80vh" : "70vh",
          }}
          className="flex items-center justify-center w-full"
        >
          <div className="flex items-center justify-center flex-1 w-full px-4 my-5">
            <div className="flex justify-center">
              <div className="flex flex-col gap-5 text-center">
                <h1 className="text-lg font-bold md:text-2xl">
                  Sorry, this page isn&apos;t available.
                </h1>
                <p>
                  <span>
                    The link you followed may be broken, or the page may have
                    been removed.&nbsp;
                  </span>
                  <Link
                    to="/"
                    className="text-[rgb(0,149,246)] hover:text-white"
                  >
                    Go back to Instagram.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 w-full h-[20vh]">
          <div className="flex justify-center">
            <div className="md:w-[600px] lg:w-[800px]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </SplashScreen>
  );
}
