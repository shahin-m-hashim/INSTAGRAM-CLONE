import Footer from "../Footer";
import PhoneFrame from "../PhoneFrame";
import LoginForm from "../forms/LoginForm";
import SplashScreen from "../../SplashScreen";
import { useEffect, useState } from "react";

export default function Home() {
  // console.log("Rendering home");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(delay);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <section className="flex flex-col gap-12 p-8 text-sm text-white bg-black lg:gap-2 min-h-svh">
          <main className="flex items-center justify-center lg:mb-2">
            <PhoneFrame />
            <div className="lg:mb-14">
              <div className="flex flex-col gap-14 md:gap-3 md:w-[345px]">
                <LoginForm />
                <div className="w-full md:p-5 md:border justify-center flex gap-1 md:border-[rgb(54,54,54)]">
                  <p>Don&apos;t have an account?</p>
                  <a className="text-[rgb(0,149,246)] font-semibold">Sign up</a>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-3">
                  <p>Get the app.</p>
                  <div className="flex gap-x-2">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN"
                    >
                      <img
                        alt="playstore"
                        className="h-full w-28"
                        src="images/playstore.webp"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US"
                    >
                      <img
                        alt="microsoft"
                        className="h-full w-28"
                        src="images/microsoft.webp"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </section>
      )}
    </>
  );
}
