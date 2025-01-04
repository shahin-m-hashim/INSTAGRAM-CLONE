import { cn } from "utils/cn";
import { useEffect, useRef, useState } from "react";

export default function Image({
  src = "",
  alt = "image",
  className = "",
  iconStyles = "",
  lazyLoad = false,
  showSkeleton = true,
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
    <div className={cn("overflow-hidden relative", className)}>
      {showSkeleton && status === "loading" && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-700 size-full animate-pulse">
          <img className={cn("size-10", iconStyles)} src="icons/image.svg" />
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-700 size-full">
          <img
            src="icons/file_error.svg"
            className={cn("size-10", iconStyles)}
          />
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
