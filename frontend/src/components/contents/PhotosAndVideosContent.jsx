import PostsIcon from "icons/PostsIcon";
import ReelsIcon from "icons/ReelsIcon";
import { useLocation } from "react-router-dom";
import HighlightsIcon from "icons/HighlightsIcon";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function PhotosAndVideosContent() {
  const activePage = useLocation().pathname.split("/")[3];

  return (
    <>
      <TransitionLink
        to="posts"
        className="relative flex items-center w-full gap-4 p-4 md:gap-2 border-y border-y-primary md:w-auto md:p-0 md:border-none"
      >
        <PostsIcon className="size-5 min-w-4" />
        <span className="text-xs font-semibold">POSTS</span>

        {activePage === "posts" && (
          <div className="h-[2px] bg-secondary -inset-x-2 absolute -bottom-5" />
        )}

        <DropDownArrowIcon className="ml-auto -rotate-90 md:hidden" />
      </TransitionLink>

      <TransitionLink
        to="reels"
        className="relative flex items-center w-full gap-4 p-4 md:gap-2 border-y border-y-primary md:w-auto md:p-0 md:border-none"
      >
        <ReelsIcon className="size-5 min-w-4" />
        <span className="text-xs font-semibold">REELS</span>
        {activePage === "reels" && (
          <div className="h-[2px] bg-secondary -inset-x-2 absolute -bottom-5" />
        )}
        <DropDownArrowIcon className="ml-auto -rotate-90 md:hidden" />
      </TransitionLink>

      <TransitionLink
        to="highlights"
        className="relative flex items-center w-full gap-4 p-4 md:gap-2 border-y border-y-primary md:w-auto md:p-0 md:border-none"
      >
        <HighlightsIcon className="size-5 min-w-4" />
        <span className="text-xs font-semibold">HIGHLIGHTS</span>
        {activePage === "highlights" && (
          <div className="h-[2px] bg-secondary -inset-x-2 absolute -bottom-5" />
        )}

        <DropDownArrowIcon className="ml-auto -rotate-90 md:hidden" />
      </TransitionLink>
    </>
  );
}
