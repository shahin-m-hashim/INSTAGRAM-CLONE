import { useEffect, useState } from "react";

export default function SplashScreen({ children, delay = 500 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    const preventScroll = (e) => e.preventDefault();

    const handlePageLoad = () => {
      timer = setTimeout(() => {
        setIsLoading(false);
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      }, delay);

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handlePageLoad);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [delay]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 h-screen z-[1000] pointer-events-none">
          <div className="flex flex-col items-center justify-center h-screen bg-black">
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
