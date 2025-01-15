import { cn } from "utils/cn";
import useStore from "store/_store";
import PostsIcon from "icons/PostsIcon";
import NewStoryIcon from "icons/NewStoryIcon";
import { useLocation } from "react-router-dom";

export default function CreateStoryOrPostWidget() {
  let location = useLocation().pathname.split("/")[1];

  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  return (
    <div
      className={cn(
        "absolute top-[50px] pointer-events-auto",
        location === "reels" ? " right-4" : " right-10"
      )}
    >
      <div className="flex flex-col items-start rounded-lg bg-widget">
        <button
          type="button"
          className="flex items-center p-2"
          onClick={() => setSecondaryWidget("createNewPost")}
        >
          <span className="w-12 font-semibold">Post</span>
          <PostsIcon className="size-5" />
        </button>

        <button type="button" className="flex items-center p-2">
          <span className="w-12 font-semibold">Story</span>
          <NewStoryIcon />
        </button>
      </div>
    </div>
  );
}
