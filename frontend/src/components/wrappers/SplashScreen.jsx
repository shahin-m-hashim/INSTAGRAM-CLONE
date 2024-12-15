import { useEffect, useState } from "react";

export default function SplashScreen({ children, delay = 500 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;

    const handlePageLoad = () => {
      const main = document.getElementById("main");
      const topNav = document.getElementById("topNav");
      const sidebar = document.getElementById("sidebar");
      const bottomNav = document.getElementById("bottomNav");

      timer = setTimeout(() => {
        setIsLoading(false);
        main && main.classList.remove("disable-on-load");
        topNav && topNav.classList.remove("disable-on-load");
        sidebar && sidebar.classList.remove("disable-on-load");
        bottomNav && bottomNav.classList.remove("disable-on-load");
      }, delay);

      main && main.classList.add("disable-on-load");
      topNav && topNav.classList.add("disable-on-load");
      sidebar && sidebar.classList.add("disable-on-load");
      bottomNav && bottomNav.classList.add("disable-on-load");
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
