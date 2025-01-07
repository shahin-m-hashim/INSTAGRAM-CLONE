import { useState } from "react";
import Image from "components/Image";
import Video from "components/Video";
import LikeIcon from "icons/LikeIcon";
import MoreIcon from "icons/MoreIcon";
import SaveIcon from "icons/SaveIcon";
import ShareIcon from "icons/ShareIcon";
import { commaNumber } from "utils/number";
import Separator from "components/Separator";
import CommentsIcon from "icons/CommentsIcon";
import ProfilePicture from "components/ProfilePicture";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

export default function Post({ post }) {
  const [showLess, setShowLess] = useState(post.caption.length > 70);

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
            <Video
              type="post"
              src={post.src}
              videoId={`p-${post.id}`}
              rootStyles="min-h-[400px] md:h-[585px]"
              videoSTyles="object-center xs:rounded-md size-full"
            />
          ) : post.type === "group" ? (
            <HorizontalScroller
              duration={300}
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
                      src={post.src}
                      lazyLoad={true}
                      alt={`post-${post.id}`}
                      imageId={`p-${post.id}`}
                      className="xs:rounded-md min-h-[400px] size-full"
                    />
                  </li>
                ))}
              </ul>
            </HorizontalScroller>
          ) : (
            <Image
              src={post.src}
              lazyLoad={true}
              alt={`post-${post.id}`}
              imageId={`p-${post.id}`}
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
