import SettingsIcon from "icons/SettingsIcon";
import { useLocation } from "react-router-dom";
import MessengerIcon from "icons/MessengerIcon";
import NewMessageIcon from "icons/NewMessageIcon";
import TransitionLink from "components/TransitionLink";
import SearchField from "components/fields/SearchField";
import InstagramTextIcon from "icons/InstagramTextIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import NavigateBackBtn from "components/NavigateBackBtn";
import CreateIcon from "icons/CreateIcon";

const Profile = () => (
  <div className="relative flex items-center justify-center w-full">
    <div className="absolute left-0">
      <TransitionLink to="settings">
        <SettingsIcon />
      </TransitionLink>
    </div>

    <span className="font-bold">Username</span>

    <div className="absolute right-0">
      <NotificationsIcon />
    </div>
  </div>
);

const Home = () => (
  <>
    <div className="relative flex items-center gap-2">
      <InstagramTextIcon />
      <DropDownArrowIcon />
    </div>

    <div className="flex justify-end flex-1 h-full">
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <SearchField className="h-8" />
        </div>

        <a className="items-center gap-4">
          <CreateIcon />
        </a>

        <a className="items-center gap-4">
          <MessengerIcon />
        </a>
      </div>
    </div>
  </>
);

const Messenger = () => (
  <div className="relative flex items-center justify-center w-full">
    <div className="absolute left-0">
      <NavigateBackBtn type="extended" />
    </div>

    <span className="font-bold">Username</span>

    <div className="absolute right-0">
      <NewMessageIcon />
    </div>
  </div>
);

const Settings = ({ page }) => {
  const getPageTitle = () => {
    switch (page[0]) {
      case "edit_profile":
        return "Edit profile";

      case "notifications":
        return page[1] === "push"
          ? "Push Notifications"
          : page[1] === "email"
          ? "Email Notifications"
          : "Notifications";

      case "account_privacy":
        return "Account Privacy";

      case "close_friends":
        return "Close Friends";

      case "blocked_accounts":
        return "Blocked Accounts";

      case "story_and_live":
        return "Story And Live";

      case "messages_and_story_replies":
        return page[1] === "message_controls"
          ? "Message Controls"
          : page[1] === "story_replies"
          ? "Story Replies"
          : page[1] === "show_activity_status"
          ? "Show Activity Status"
          : "Messages And Story Replies";

      case "tags_and_mentions":
        return "Tags And Mentions";

      case "comments":
        return "Comments";

      case "sharing_and_reuse":
        return "Sharing And Reuse";

      case "restricted_accounts":
        return "Restricted Accounts";

      case "hidden_words":
        return "Hidden Words";

      case "language":
        return "Language";

      case "muted_accounts":
        return "Muted Accounts";

      case "content_preferences":
        return "Content Preferences";

      case "like_and_share_counts":
        return "Like And Share Counts";

      case "archiving_and_downloading":
        return "Archiving And Downloading";

      case "website_permissions":
        return "Website Permissions";

      case "account_type_and_tools":
        return "Account Type And Tools";

      case "help":
        return page[1] === "privacy_and_security"
          ? "Privacy And Security"
          : page[1] === "support_requests"
          ? page[2] === "reports"
            ? "Reports"
            : page[2] === "safety_notices"
            ? "Safety Notices"
            : page[2] === "violations"
            ? "Violations"
            : "Support Requests"
          : "Help";

      case "account_status":
        return page[1] === "removed_content"
          ? "Removed Content"
          : page[1] === "content_lowered"
          ? "Content Lowered"
          : page[1] === "hidden_features"
          ? "Hidden Features"
          : "Account Status";

      default:
        return "Settings And Privacy";
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
};

const Activity = ({ page }) => {
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
};

export default function TopNavbar() {
  const url = useLocation().pathname.split("/");

  return (
    <nav className="bg-primary text-primary block md:hidden absolute inset-x-0 top-0 h-[60px] pointer-events-auto overflow-x-auto">
      <div className="flex items-center justify-between gap-2 px-4 border-b border-primary size-full ">
        {url[1] === "settings" ? (
          <Settings page={url.slice(2)} />
        ) : url[1] === "direct" ? (
          <Messenger />
        ) : url[1] === "username" ? (
          <Profile />
        ) : url[1] === "your_activity" ? (
          <Activity page={url.slice(2)} />
        ) : (
          <Home />
        )}
      </div>
    </nav>
  );
}
