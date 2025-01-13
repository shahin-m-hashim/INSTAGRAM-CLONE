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
import Carousal from "components/wrappers/Carousal";
import ProfilePicture from "components/ProfilePicture";

const Caption = ({ caption }) => {
  const [showLess, setShowLess] = useState(caption.length > 70);

  return (
    <p className="text-sm">
      {showLess ? (
        <>
          {caption.slice(0, 70)}
          <button
            type="button"
            className="text-tertiary"
            onClick={() => setShowLess(false)}
          >
            ... more
          </button>
        </>
      ) : (
        <>{caption}</>
      )}
    </p>
  );
};

export default function Post({ post }) {
  return (
    <div className="flex flex-col flex-grow-0 w-full xs:w-[468px]">
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
                id={post.user.id || "post-profile-pic"}
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
              id={post.id}
              src={post.src}
              rootStyles="xs:rounded-md min-h-[400px] md:h-[585px]"
            />
          ) : post.type === "group" ? (
            <Carousal
              gap="0"
              duration={300}
              showDots={true}
              iconType="rounded"
              id="posts-carousal"
              leftArrowStyle="left-2"
              rightArrowStyle="right-2"
              carousalStyles="min-h-[400px]"
              overrideTouchScreenBehavior={true}
            >
              {post.media.map((post, idx) => (
                <div key={idx} className="flex-shrink-0 size-full">
                  <Image
                    alt="post"
                    id={post.id}
                    src={post.src}
                    lazyLoad={true}
                    className="xs:rounded-md size-full"
                  />
                </div>
              ))}
            </Carousal>
          ) : (
            <Image
              alt="post"
              id={post.id}
              src={post.src}
              lazyLoad={true}
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
                    alt="verified"
                    className="h-3"
                    src="icons/verified.svg"
                  />
                )}
              </div>
              <Caption caption={post.caption} />
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
