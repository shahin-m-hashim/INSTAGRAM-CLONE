import { cn } from "utils/cn";
import useStore from "store/_store";
import MutedIcon from "icons/MutedIcon";
import { useEffect, useRef } from "react";
import UnmutedIcon from "icons/UnmutedIcon";
import { useShallow } from "zustand/shallow";

const VideoError = ({ iconStyles }) => (
  <div className="absolute inset-0 z-50 pointer-events-none">
    <div className="flex items-center justify-center bg-slate-700 size-full">
      <img src="icons/file_error.svg" className={cn("size-10", iconStyles)} />
    </div>
  </div>
);

export default function Video({
  id = "",
  src = "",
  type = "reel",
  rootStyles = "",
  iconStyles = "",
}) {
  const videoRef = useRef();
  const timerRef = useRef();
  const muteIconRef = useRef();

  const [
    video,
    initializeVideo,
    handleVideoError,
    setIsVideoPlaying,
    toggleIsVideoMuted,
  ] = useStore(
    useShallow((state) => [
      state.videos[id],
      state.initializeVideo,
      state.handleVideoError,
      state.setIsVideoPlaying,
      state.toggleIsVideoMuted,
    ])
  );

  const handleMute = () => {
    toggleIsVideoMuted(id);

    const muteIcon = muteIconRef.current;
    if (muteIcon) {
      muteIcon.style.opacity = 1;
      timerRef.current = setTimeout(() => {
        muteIcon.style.opacity = 0;
      }, 300);
    }
  };

  const toggleIsPlaying = () => {
    if (video?.isPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(id, false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsVideoPlaying(id, true);
    }
  };

  useEffect(() => {
    if (video) return;

    initializeVideo(id, type !== "reel");

    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.error) handleVideoError(id);

    if (type === "explore") return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !video?.isPlaying) {
          videoElement.play().catch(() => {});
          setIsVideoPlaying(id, true);
        } else {
          videoElement.pause();
          setIsVideoPlaying(id, false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75,
    });

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      {type === "explore" ? (
        <>
          {video?.hasError && <VideoError iconStyles={iconStyles} />}

          <video
            muted
            src={src}
            ref={videoRef}
            onError={() => handleVideoError(id)}
            className="absolute z-0 object-cover object-center size-full"
          />
        </>
      ) : (
        <div className={cn("relative overflow-hidden", rootStyles)}>
          {video?.hasError && <VideoError iconStyles={iconStyles} />}

          {/* CONTROLS */}
          {type === "reel" ? (
            <>
              <div
                ref={muteIconRef}
                style={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ease-in opacity-0 pointer-events-none"
              >
                <div className="p-3 bg-black rounded-full opacity-50">
                  {video?.isMuted ? (
                    <MutedIcon className="text-white size-5" />
                  ) : (
                    <UnmutedIcon className="text-white size-5" />
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleMute}
                className="absolute inset-0 z-10"
              />
            </>
          ) : (
            <>
              {!video?.isPlaying && (
                <div className="absolute inset-0 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 size-20">
                  <img
                    alt="paused"
                    src="images/paused.png"
                    className="size-full"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleMute}
                className="absolute z-20 right-3 bottom-3"
              >
                <div className="p-2 rounded-full bg-[rgb(38,38,38)]">
                  {video?.isMuted ? (
                    <MutedIcon className="text-white size-3" />
                  ) : (
                    <UnmutedIcon className="text-white size-3" />
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={toggleIsPlaying}
                className="absolute inset-0 z-10"
              />
            </>
          )}

          <div className="absolute inset-0 z-0">
            <video
              loop
              src={src}
              ref={videoRef}
              muted={video?.isMuted}
              onError={() => handleVideoError(id)}
              className={cn(
                "size-full object-center",
                type === "reel" ? "object-cover" : "xs:rounded-md size-full"
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}
