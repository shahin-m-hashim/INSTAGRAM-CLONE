import Image from "components/Image";
import LikeIcon from "icons/LikeIcon";
import MoreIcon from "icons/MoreIcon";
import SaveIcon from "icons/SaveIcon";
import ShareIcon from "icons/ShareIcon";
import MutedIcon from "icons/MutedIcon";
import { commaNumber } from "utils/number";
import UnmutedIcon from "icons/UnmutedIcon";
import Separator from "components/Separator";
import CommentsIcon from "icons/CommentsIcon";
import { useEffect, useRef, useState } from "react";
import ProfilePicture from "components/ProfilePicture";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

export default function Post({ post }) {
  const videoRef = useRef();
  const [showLess, setShowLess] = useState(post.caption.length > 70);

  const [video, setVideo] = useState({
    isMuted: true,
    isPlaying: true,
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

  return (
    <div className="flex flex-col flex-grow-0 xs:w-[468px]">
      <div className="hidden xs:block">
        <Separator straight={true} />
      </div>

      <div className="xs:my-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <ProfilePicture
                className="size-8"
                storyPadding="2px"
                src={post.user.profilePic}
                hasStory={post.user.hasStory}
              />

              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <span className="pb-1 font-semibold">
                    {post.user.username}
                  </span>
                  {post.user.isVerified && (
                    <img
                      alt="verified"
                      className="h-3"
                      src="icons/verified.svg"
                    />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="pb-2 font-bold">.</span>
                  <span className=" text-tertiary">
                    {post.time.timeExtended}
                  </span>
                </div>
              </div>
            </div>
            <MoreIcon />
          </div>

          {post.type === "video" ? (
            <div className="relative min-h-[400px] md:h-[585px]">
              <button type="button" onClick={togglePlay} className="size-full">
                <video
                  ref={videoRef}
                  src={post.media121}
                  muted={video.isMuted}
                  className="object-center xs:rounded-md size-full"
                />
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="absolute z-10 right-3 bottom-3"
              >
                <div className="p-2 rounded-full bg-[rgb(38,38,38)]">
                  {video.isMuted ? (
                    <MutedIcon className="text-white size-3" />
                  ) : (
                    <UnmutedIcon className="text-white size-3" />
                  )}
                </div>
              </button>

              {!video.isPlaying && (
                <img
                  alt="paused"
                  src="images/paused.png"
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 size-20"
                />
              )}
            </div>
          ) : post.type === "group" ? (
            <HorizontalScroller
              duration={70}
              iconType="rounded"
              leftArrowStyle="left-2"
              rightArrowStyle="right-2"
              dots={post.media.length}
              overrideTouchScreenBehavior={true}
            >
              <ul className="flex items-center min-h-[400px] md:h-[585px]">
                {post.media.map((post, idx) => (
                  <li key={idx} className="flex-shrink-0 size-full">
                    <Image
                      src={post.url}
                      lazyLoad={true}
                      alt={`post-${post.id}`}
                      className="xs:rounded-md min-h-[400px] size-full"
                    />
                  </li>
                ))}
              </ul>
            </HorizontalScroller>
          ) : (
            <Image
              lazyLoad={true}
              src={post.media}
              alt={`post-${post.id}`}
              className="rounded-md w-full min-h-[400px] md:h-[585px]"
            />
          )}

          <div className="flex flex-col gap-2 px-4 py-4 xs:px-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <LikeIcon />
                <CommentsIcon />
                <ShareIcon />
              </div>
              <SaveIcon />
            </div>

            <div className="text-sm font-semibold">
              <span>{commaNumber(post.noOfLikes)}</span>
              <span>&nbsp;likes</span>
            </div>

            <div>
              <div className="flex items-center float-left gap-1 mr-2 -mb-2 w-fit">
                <span className="pb-1 font-semibold">{post.user.username}</span>
                {post.user.isVerified && (
                  <img
                    src="icons/verified.svg"
                    className="h-3"
                    alt="verified"
                  />
                )}
              </div>
              {showLess ? (
                <p className="text-sm">
                  {post.caption.slice(0, 70) + "... "}
                  <button
                    type="button"
                    className="text-tertiary"
                    onClick={() => setShowLess(false)}
                  >
                    more
                  </button>
                </p>
              ) : (
                <p className="text-sm">{post.caption}</p>
              )}
            </div>

            <a className="text-[rgb(170,170,170)] text-sm">
              View all {post.noOfComments} comments
            </a>
            <p className="text-sm text-tertiary">{post.postedAt}</p>
          </div>
        </div>
      </div>

      <div className="hidden xs:block">
        <Separator straight={true} />
      </div>
    </div>
  );
}
