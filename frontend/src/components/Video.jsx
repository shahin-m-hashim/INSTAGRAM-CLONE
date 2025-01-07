import { cn } from "utils/cn";
import MutedIcon from "icons/MutedIcon";
import UnmutedIcon from "icons/UnmutedIcon";
import { useEffect, useRef, useState } from "react";

export default function Video({
  src = "",
  type = "reel",
  rootStyles = "",
  iconStyles = "",
  videoStyles = "",
}) {
  const videoRef = useRef();
  const muteIconRef = useRef();
  const isInteractedRef = useRef(false);

  const [video, setVideo] = useState({
    hasError: false,
    isPlaying: false,
    isMuted: type !== "reel",
  });

  const togglePlay = () => {
    setVideo((prev) => {
      const isPlaying = !prev.isPlaying;
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
      return { ...prev, isPlaying };
    });
  };

  const toggleMute = () => {
    isInteractedRef.current = true;
    setVideo((prev) => ({ ...prev, isMuted: !prev.isMuted }));
  };

  const handleMuteIcon = () => {
    const muteIcon = muteIconRef.current;
    if (muteIcon && isInteractedRef.current) {
      muteIcon.style.opacity = 1;

      return setTimeout(() => {
        muteIcon.style.opacity = 0;
        isInteractedRef.current = false;
      }, 300);
    }
  };

  const handleError = () => setVideo((prev) => ({ ...prev, hasError: true }));

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    if (videoElement.error) handleError();

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setVideo((prev) => {
          if (entry.isIntersecting && !prev.isPlaying) {
            videoElement.play().catch(() => {});
            return { ...prev, isPlaying: true };
          } else {
            videoElement.pause();
            return { ...prev, isPlaying: false };
          }
        });
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75,
    });

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  useEffect(() => {
    const timer = handleMuteIcon();
    return () => clearTimeout(timer);
  }, [video.isMuted]);

  return (
    <div className={cn("relative overflow-hidden", rootStyles)}>
      {video.hasError && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <div className="flex items-center justify-center bg-slate-700 size-full">
            <img
              src="icons/file_error.svg"
              className={cn("size-10", iconStyles)}
            />
          </div>
        </div>
      )}

      {/* CONTROLS */}
      {type === "reel" ? (
        <>
          <div
            ref={muteIconRef}
            style={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ease-in opacity-0 pointer-events-none"
          >
            <div className="p-3 bg-black rounded-full opacity-50">
              {video.isMuted ? (
                <MutedIcon className="text-white size-5" />
              ) : (
                <UnmutedIcon className="text-white size-5" />
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMute}
            className="absolute inset-0 z-10"
          />
        </>
      ) : (
        <>
          {!video.isPlaying && (
            <div className="absolute inset-0 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 size-20">
              <img alt="paused" src="images/paused.png" className="size-full" />
            </div>
          )}

          <button
            type="button"
            onClick={toggleMute}
            className="absolute z-20 right-3 bottom-3"
          >
            <div className="p-2 rounded-full bg-[rgb(38,38,38)]">
              {video.isMuted ? (
                <MutedIcon className="text-white size-3" />
              ) : (
                <UnmutedIcon className="text-white size-3" />
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 z-10"
          />
        </>
      )}

      <div className="absolute inset-0 z-0">
        <video
          loop
          src={src}
          ref={videoRef}
          muted={video.isMuted}
          onError={handleError}
          className={cn("size-full", videoStyles)}
        />
      </div>
    </div>
  );
}
