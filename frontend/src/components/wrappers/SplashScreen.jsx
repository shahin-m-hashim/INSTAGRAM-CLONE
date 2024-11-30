/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function SplashScreen({ delay = 500, children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      const timer = setTimeout(() => setIsLoading(false), delay);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, [delay]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 h-screen z-[1000] pointer-events-none">
          <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="flex flex-col items-center justify-end flex-1">
              <img
                width="60"
                src="images/loading_logo.webp"
                alt="Instagram Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-end flex-1 pb-10">
              <span className="text-gray-500 ">from</span>
              <img
                width="100"
                alt="instagram-meta-logo"
                src="images/Instagram_Meta_Logo.webp"
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={isLoading ? "absolute inset-0 h-screen overflow-hidden" : ""}
      >
        {children}
      </div>
    </>
  );
}
