import { cn } from "utils/cn";
import useStore from "store/_store";
import { useEffect, useRef } from "react";

export default function Image({
  src = "",
  imageId = "",
  alt = "image",
  className = "",
  iconStyles = "",
  lazyLoad = false,
  showSkeleton = true,
}) {
  const imgRef = useRef(null);
  const { images, initializeImage, setStatus } = useStore();

  const image = images.find((img) => img.id === imageId);

  useEffect(() => {
    initializeImage(imageId);
    const img = imgRef.current;

    const handleLoad = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setStatus(imageId, "loaded");
      } else {
        handleError();
      }
    };

    const handleError = () => setStatus(imageId, "error");

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
      {showSkeleton && image?.status === "loading" && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-700 size-full animate-pulse">
          <img className={cn("size-10", iconStyles)} src="icons/image.svg" />
        </div>
      )}

      {image?.status === "error" && (
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
          image?.status === "loaded" ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
