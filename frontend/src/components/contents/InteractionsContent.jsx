import LikeIcon from "icons/LikeIcon";
import ReviewsIcon from "icons/ReviewsIcon";
import CommentsIcon from "icons/CommentsIcon";
import { useLocation } from "react-router-dom";
import StoryRepliesIcon from "icons/StoryRepliesIcon";
import TransitionLink from "components/TransitionLink";

export default function InteractionsContent() {
  const activePage = useLocation().pathname.split("/")[3];

  return (
    <>
      <TransitionLink
        to="likes"
        className="relative flex items-center gap-4 md:gap-2 border-y border-y-[rgb(138,138,138)] w-full md:w-auto p-4 md:p-0 md:border-none"
      >
        <LikeIcon className="size-5 min-w-4" />
        <span className="text-sm md:text-[10px] lg:text-xs font-semibold">
          LIKES
        </span>
        {activePage === "likes" && (
          <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
        )}
      </TransitionLink>

      <TransitionLink
        to="comments"
        className="relative flex items-center gap-4 md:gap-2 border-y border-y-[rgb(138,138,138)] w-full md:w-auto p-4 md:p-0 md:border-none"
      >
        <CommentsIcon className="size-5 min-w-4" />
        <span className="text-sm md:text-[10px] lg:text-xs font-semibold">
          COMMENTS
        </span>
        {activePage === "comments" && (
          <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
        )}
      </TransitionLink>

      <TransitionLink
        to="story_replies"
        className="relative flex items-center gap-4 md:gap-2 border-y border-y-[rgb(138,138,138)] w-full md:w-auto p-4 md:p-0 md:border-none"
      >
        <StoryRepliesIcon className="size-5 min-w-4" />
        <span className="text-sm md:text-[10px] lg:text-xs font-semibold">
          STORY REPLIES
        </span>
        {activePage === "story_replies" && (
          <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
        )}
      </TransitionLink>

      <TransitionLink
        to="reviews"
        className="relative flex items-center gap-4 md:gap-2 border-y border-y-[rgb(138,138,138)] w-full md:w-auto p-4 md:p-0 md:border-none"
      >
        <ReviewsIcon className="size-5 min-w-4" />
        <span className="text-sm md:text-[10px] lg:text-xs font-semibold">
          REVIEWS
        </span>
        {activePage === "reviews" && (
          <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
        )}
      </TransitionLink>
    </>
  );
}
