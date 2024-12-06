import Footer from "components/Footer";
import Button from "components/wrappers/Button";
import HomeLayout from "components/wrappers/HomeLayout";
import InstagramTextIcon from "icons/InstagramTextIcon";

const Content = () => (
  <div className="p-4 mb-auto text-white bg-black size-full">
    <div className="flex justify-center">
      <div className="flex md:w-[600px] lg:w-[800px] flex-col gap-5  text-center">
        <h1 className="text-lg font-bold md:text-2xl">
          Sorry, this page isn&apos;t available.
        </h1>
        <p>
          <span>
            The link you followed may be broken, or the page may have been
            removed.&nbsp;
          </span>
          <a className="text-[rgb(0,149,246)] hover:text-white">
            Go back to Instagram.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default function NotFoundPage({ authenticated = false }) {
  return (
    <div className="flex flex-col bg-black">
      {!authenticated && (
        <nav className="p-4 w-full h-[10vh] border-b border-b-[rgb(54,54,54)]">
          <div className="flex justify-center">
            <ul className="md:w-[600px] lg:w-[800px] flex items-center gap-5 justify-between">
              <li>
                <InstagramTextIcon />
              </li>
              <li className="flex items-center gap-4">
                <Button className="px-4">Log In</Button>
                <a className="text-[rgb(0,149,246)] hover:text-white">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {authenticated ? (
        <HomeLayout>
          <Content />
        </HomeLayout>
      ) : (
        <div className="h-[70vh]">
          <Content />
        </div>
      )}

      {!authenticated && (
        <div className="p-4 w-full h-[20vh]">
          <div className="flex justify-center">
            <div className="md:w-[600px] lg:w-[800px]">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
