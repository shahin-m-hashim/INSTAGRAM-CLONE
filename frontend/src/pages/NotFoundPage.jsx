import Footer from "components/Footer";
import Button from "components/wrappers/Button";
import AppLayout from "components/wrappers/AppLayout";
import InstagramTextIcon from "icons/InstagramTextIcon";

const Content = () => (
  <div className="flex items-center justify-center flex-1 w-full px-4 my-5">
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

export default function NotFoundPage({ isAuthenticated = false }) {
  return (
    <>
      {isAuthenticated ? (
        <AppLayout>
          <main className="h-screen flex flex-col min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
            <Content />

            <div className="w-full px-4 my-5 md:my-10">
              <div className="flex justify-center">
                <div className="md:w-[600px] lg:w-[800px]">
                  <Footer />
                </div>
              </div>
            </div>
          </main>
        </AppLayout>
      ) : (
        <div className="h-screen text-white bg-black">
          <nav className="p-4 w-full h-[10vh] border-b border-b-[rgb(54,54,54)]">
            <div className="flex justify-center">
              <ul className="md:w-[600px] lg:w-[800px] flex items-center gap-5 justify-between">
                <li>
                  <InstagramTextIcon />
                </li>
                <li className="flex items-center gap-4 w-[170px]">
                  <Button className="flex-1 px-4">Log In</Button>
                  <a className="flex-1 text-[rgb(0,149,246)] hover:text-white">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="h-[70vh] w-full flex justify-center items-center">
            <Content />
          </div>

          <div className="p-4 w-full h-[20vh]">
            <div className="flex justify-center">
              <div className="md:w-[600px] lg:w-[800px]">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
