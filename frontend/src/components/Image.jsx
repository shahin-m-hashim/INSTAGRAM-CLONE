import { cn } from "utils/cn";
import useStore from "store/_store";
import { useEffect, useRef } from "react";
import { useShallow } from "zustand/shallow";

export default function Image({
  id = "",
  src = "",
  alt = "image",
  className = "",
  iconStyles = "",
  lazyLoad = false,
  showSkeleton = true,
}) {
  const imgRef = useRef(null);

  const [image, initializeImage, setImageStatus] = useStore(
    useShallow((state) => [
      state.images[id],
      state.initializeImage,
      state.setImageStatus,
    ])
  );

  useEffect(() => {
    if (image) return;

    initializeImage(id);
    const img = imgRef.current;

    const handleLoad = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setImageStatus(id, "loaded");
      } else {
        handleError();
      }
    };

    const handleError = () => setImageStatus(id, "error");

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleError);
    }

    return () => {
      if (img) {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleError);
      }
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
