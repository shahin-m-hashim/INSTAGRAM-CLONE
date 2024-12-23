import NavigateBackBtn from "components/NavigateBackBtn";

export default function ActivityHeader({ page }) {
  const getPageTitle = () => {
    switch (page[0]) {
      case "interactions":
        return page[1] === "likes"
          ? "Likes"
          : page[1] === "comments"
          ? "Comments"
          : page[1] === "story_replies"
          ? "Story Replies"
          : page[1] === "reviews"
          ? "Reviews"
          : "Interactions";

      case "photos_and_videos":
        return page[1] === "posts"
          ? "Posts"
          : page[1] === "reels"
          ? "Reels"
          : page[1] === "highlights"
          ? "Highlights"
          : "Photos And Videos";

      case "account_history":
        return "Account History";

      case "ad_activity":
        return "Ad Activity";

      case "download_your_info":
        return "Download Your Information";

      default:
        return "Your Activity";
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute left-0">
        <NavigateBackBtn />
      </div>

      <h1 className="font-semibold">{getPageTitle()}</h1>
    </div>
  );
}
