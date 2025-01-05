import { cn } from "utils/cn";
import { useEffect, useRef, useState } from "react";

export default function Video({
  src = "",
  type = "reel",
  className = "",
  iconStyles = "",
  lazyLoad = false,
  showSkeleton = true,
}) {
  const videoRef = useRef();

  const [video, setVideo] = useState({
    isMuted: true,
    isPlaying: true,
    status: "loading",
  });

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && video.isPlaying) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75,
    });

    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [video.isPlaying]);

  const toggleMute = () =>
    setVideo((prev) => ({ ...prev, isMuted: !prev.isMuted }));

  const togglePlay = () => {
    if (video.isPlaying) {
      setVideo((prev) => ({ ...prev, isPlaying: false }));
    } else {
      setVideo((prev) => ({ ...prev, isPlaying: true }));
    }
  };

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
      {showSkeleton && video.status === "loading" && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-700 size-full animate-pulse">
          <img className={cn("size-10", iconStyles)} src="icons/image.svg" />
        </div>
      )}

      {video.status === "error" && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-700 size-full">
          <img
            src="icons/file_error.svg"
            className={cn("size-10", iconStyles)}
          />
        </div>
      )}

      <video
        src={src}
        ref={videoRef}
        onClick={togglePlay}
        muted={video.isMuted}
        className="object-center xs:rounded-md size-full"
      />
    </div>
  );
}
