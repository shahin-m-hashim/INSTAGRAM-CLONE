import PostsIcon from "icons/PostsIcon";
import NewStoryIcon from "icons/NewStoryIcon";

export default function CreateStoryOrPostWidget() {
  return (
    <div className="absolute top-[50px] right-10">
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
