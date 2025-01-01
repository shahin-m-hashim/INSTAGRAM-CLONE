import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import LikeIcon from "icons/LikeIcon";
import rows from "mocks/explore.json";
import Footer from "components/Footer";
import ReelsIcon from "icons/ReelsIcon";
import CommentsIcon from "icons/CommentsIcon";
import GroupedPostsIcon from "icons/GroupedPostsIcon";

const Post = ({ post }) => {
  return (
    <>
      {post.type === "group" ? (
        <img
          src={post.media[0].url}
          className="absolute z-0 object-cover object-center size-full"
        />
      ) : post.type === "video" ? (
        <video
          loading="lazy"
          src={post.media}
          className="absolute z-0 object-cover object-center size-full"
        />
      ) : (
        <img
          loading="lazy"
          src={post.media}
          className="absolute z-0 object-cover object-center size-full"
        />
      )}

      <div className="absolute top-2 right-2">
        {post.type === "video" ? (
          <ReelsIcon isActive={true} className="text-white size-4 xs:size-6" />
        ) : post.type === "group" ? (
          <GroupedPostsIcon
            isActive={true}
            className="text-white size-4 xs:size-6"
          />
        ) : null}
      </div>

      <div className="absolute size-full bg-[rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 z-10">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center gap-6 font-bold text-white">
            <div className="flex items-center gap-2">
              <LikeIcon
                isActive={true}
                className="text-white size-4 xs:size-6"
              />
              <span>{post.likes}</span>
            </div>

            <div className="flex items-center gap-2">
              <CommentsIcon
                isActive={true}
                className="text-white size-4 xs:size-6"
              />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ExplorePage() {
  return (
    <main className="bg-primary flex flex-col text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="font-semibold flex flex-col gap-[2px] md:gap-1 md:my-10 md:px-6 xl:px-36">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="relative grid flex-1 w-full grid-cols-3 gap-[2px] md:gap-1"
          >
            {idx % 2 === 0 ? (
              <>
                {row.map((post, idx) => (
                  <Fragment key={uuidv4()}>
                    {idx === 1 || idx === 3 ? (
                      <>
                        <div className="relative cursor-pointer group aspect-square">
                          <Post post={post} />
                        </div>
                        {row.length === 5 && <div className="aspect-square" />}
                      </>
                    ) : idx === 4 ? (
                      <div className="absolute cursor-pointer group z-10 right-0 w-[calc((100%/3)-2px)] inset-y-0">
                        <Post post={post} />
                      </div>
                    ) : (
                      <div className="relative cursor-pointer group aspect-square">
                        <Post post={post} />
                      </div>
                    )}
                  </Fragment>
                ))}
              </>
            ) : (
              <>
                {row.map((post, idx) => (
                  <Fragment key={uuidv4()}>
                    {idx === 0 || idx === 2 ? (
                      <>
                        {row.length === 5 && <div className="aspect-square" />}
                        <div className="relative cursor-pointer group aspect-square">
                          <Post post={post} />
                        </div>
                      </>
                    ) : idx === 4 ? (
                      <div className="absolute cursor-pointer group z-10 left-0 w-[calc((100%/3)-2px)] inset-y-0">
                        <Post post={post} />
                      </div>
                    ) : (
                      <div className="relative cursor-pointer group aspect-square">
                        <Post post={post} />
                      </div>
                    )}
                  </Fragment>
                ))}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
