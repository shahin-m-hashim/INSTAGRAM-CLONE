import { useEffect, useState } from "react";

export default function SplashScreen({ children, delay = 500 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;

    const handlePageLoad = () => {
      timer = setTimeout(() => {
        setIsLoading(false);

        document
          .getElementById("topNavbar")
          .classList.add("pointer-events-auto");

        document
          .getElementById("bottomNavbar")
          .classList.add("pointer-events-auto");

        document
          .getElementById("main")
          .classList.add("pointer-events-auto", "overflow-auto");

        document
          .getElementById("sidebar")
          .classList.add("pointer-events-auto", "overflow-y-auto");
      }, delay);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 min-w-[320px] h-screen z-[1000] pointer-events-none">
          <div className="flex flex-col items-center justify-center text-white bg-black size-full">
            <div className="flex flex-col items-center justify-end flex-1">
              <img
                width="60"
                src="images/instagram_logo.webp"
                alt="instagram logo"
              />
            </div>
            <div className="flex flex-col items-center justify-end flex-1 pb-10">
              <span className="text-gray-500 ">from</span>
              <img width="100" alt="meta logo" src="images/meta_logo.webp" />
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
