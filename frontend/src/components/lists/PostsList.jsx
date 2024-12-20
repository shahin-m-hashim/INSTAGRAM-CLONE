import posts from "mocks/posts.json";
import Image from "components/Image";
import LikeIcon from "icons/LikeIcon";
import MoreIcon from "icons/MoreIcon";
import SaveIcon from "icons/SaveIcon";
import ShareIcon from "icons/ShareIcon";
import Separator from "components/Separator";
import CommentsIcon from "icons/CommentsIcon";

export default function PostsList() {
  return (
    <>
      {posts.map((post, idx) => (
        <div className="flex flex-col flex-grow-0 xs:w-[468px]" key={idx}>
          <div className="hidden xs:block">
            <Separator straight={true} />
          </div>

          <div className="px-4 xs:p-0 xs:my-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2">
                  {post.hasStory ? (
                    <div
                      className="rounded-full p-[2px]"
                      style={{
                        background: `conic-gradient(#FFD600, #FF7A00, #FF0069, #D300C5, #7638FA, #FFD600)`,
                      }}
                    >
                      <img
                        alt={`${post.username}`}
                        className="w-8 rounded-full"
                        src={post.profilePic || "images/default_dp.webp"}
                      />
                    </div>
                  ) : (
                    <img
                      alt={`${post.username}`}
                      className="w-10 rounded-full"
                      src={post.profilePic || "images/default_dp.webp"}
                    />
                  )}
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <span className="pb-1 font-semibold">
                        {post.username}
                      </span>
                      {post.isVerified && (
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
                        {post.timeExtended}
                      </span>
                    </div>
                  </div>
                </div>
                <MoreIcon />
              </div>

              <Image
                alt="post"
                src={post.url}
                lazyLoad={true}
                className="rounded-md"
              />

              <div className="flex flex-col gap-2 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <LikeIcon />
                    <CommentsIcon />
                    <ShareIcon />
                  </div>
                  <SaveIcon />
                </div>

                <div className="text-sm font-semibold">
                  <span>{post.noOfLikes}</span>
                  <span>&nbsp;likes</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="pb-1 font-semibold">{post.username}</span>
                    {post.isVerified && (
                      <img
                        src="icons/verified.svg"
                        className="h-3"
                        alt="verified"
                      />
                    )}
                  </div>
                  <span>{post.caption}</span>
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
      ))}
    </>
  );
}
