import LikeIcon from "icons/LikeIcon";
import MoreIcon from "icons/MoreIcon";
import ShareIcon from "icons/ShareIcon";
import MutedIcon from "icons/MutedIcon";
import UnmutedIcon from "icons/UnmutedIcon";
import CommentsIcon from "icons/CommentsIcon";
import { useEffect, useRef, useState } from "react";
import ProfilePicture from "components/ProfilePicture";

const Reel = ({ reel }) => {
  const videoRef = useRef();
  const [video, setVideo] = useState({ isMuted: false, showIcon: false });

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  }, []);

  const toggleMute = () =>
    setVideo((prev) => ({
      ...prev,
      showIcon: true,
      isMuted: !prev.isMuted,
    }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideo((prev) => ({ ...prev, showIcon: false }));
    }, 500);

    return () => clearTimeout(timer);
  }, [video.showIcon]);

  return (
    <div className="relative w-full h-screen text-xs xs:w-1/2 xl:w-2/5">
      <div className="absolute inset-0 z-0">
        <video
          loop
          ref={videoRef}
          loading="lazy"
          src={reel.src}
          onClick={toggleMute}
          muted={video.isMuted}
          className="object-cover object-center size-full"
        />
      </div>

      {video.showIcon && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-3 bg-black rounded-full mute-button">
            {video.isMuted ? (
              <MutedIcon className="text-white size-5" />
            ) : (
              <UnmutedIcon className="text-white size-5" />
            )}
          </div>
        </div>
      )}

      <div className="absolute z-10 bg-transparent bottom-4 right-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <LikeIcon className="text-white" />
            <span>{reel.likes}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CommentsIcon className="text-white" />
            <span>{reel.comments}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShareIcon className="text-white" />
            <span>{reel.shares}</span>
          </div>
          <div className="flex flex-col items-center">
            <MoreIcon className="text-white rotate-90" />
          </div>
        </div>
      </div>

      <div className="absolute z-10 bottom-4 left-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {reel.user.profilePic ? (
              <img src={reel.user.profilePic} className="rounded-full size-8" />
            ) : (
              <ProfilePicture storyPadding="0px" className="size-8" />
            )}
            <span className="font-bold">{reel.user.username}</span>
            <button className="px-3 py-[2px] border border-white rounded-md">
              Follow
            </button>
          </div>
          <p className="text-sm">Caption</p>
          <button
            type="button"
            className="px-2 py-1 font-bold border border-white rounded-md"
          >
            <span>Music. Original audio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reel;
