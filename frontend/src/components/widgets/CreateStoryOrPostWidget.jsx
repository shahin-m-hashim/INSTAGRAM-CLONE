import PostsIcon from "icons/PostsIcon";
import NewStoryIcon from "icons/NewStoryIcon";
import { useLocation } from "react-router-dom";
import { cn } from "utils/cn";

export default function CreateStoryOrPostWidget() {
  let location = useLocation().pathname.split("/")[1];

  return (
    <div
      className={cn(
        "absolute top-[50px]",
        location === "reels" ? " right-4" : " right-10"
      )}
    >
      <div className="flex flex-col rounded-lg bg-widget">
        <div className="flex items-center px-4 py-2">
          <span className="w-12 font-semibold">Post</span>
          <PostsIcon className="size-5" />
        </div>

        <div className="flex items-center px-4 py-2">
          <span className="w-12 font-semibold">Story</span>
          <NewStoryIcon />
        </div>
      </div>
    </div>
  );
}
