/* eslint-disable react/prop-types */

import { cn } from "utils/cn";
import { useEffect, useRef, useState } from "react";

export default function Image({
  src = "",
  alt = "image",
  className = "",
  lazyLoad = false,
  showSkeleton = true,
  iconClassName = "size-10",
  skeletonClassName = "bg-slate-700",
}) {
  const imgRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const img = imgRef.current;

    const handleLoad = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setStatus("loaded");
      } else {
        handleError();
      }
    };

    const handleError = () => setStatus("error");

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleError);
    }

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div
      className={className}
      style={{ overflow: "hidden", position: "relative" }}
    >
      {showSkeleton && status === "loading" && (
        <div
          className={cn(
            skeletonClassName,
            "absolute inset-0 flex items-center justify-center size-full animate-pulse z-20"
          )}
        >
          <img className={iconClassName} src="icons/image.svg" />
        </div>
      )}

      {status === "error" && (
        <div
          className={cn(
            skeletonClassName,
            "absolute inset-0 flex items-center justify-center size-full z-20"
          )}
        >
          <img src="icons/file_error.svg" className={iconClassName} />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        ref={imgRef}
        loading={lazyLoad ? "lazy" : "eager"}
        className={cn(
          "size-full",
          status === "loaded" ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
