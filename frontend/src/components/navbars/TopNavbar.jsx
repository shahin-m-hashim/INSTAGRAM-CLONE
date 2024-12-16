import SettingsIcon from "icons/SettingsIcon";
import { useLocation } from "react-router-dom";
import NewMessageIcon from "icons/NewMessageIcon";
import TransitionLink from "components/TransitionLink";
import SearchField from "components/fields/SearchField";
import InstagramTextIcon from "icons/InstagramTextIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import NavigateBackBtn from "components/NavigateBackBtn";

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
    <InstagramTextIcon />

    <div className="flex justify-end flex-1 h-full">
      <div className="flex items-center gap-3">
        <div className="h-8">
          <SearchField />
        </div>

        <a className="items-center gap-4">
          <NotificationsIcon />
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

const Settings = ({ page }) => (
  <div className="relative flex items-center justify-center w-full">
    <div className="absolute left-0">
      <NavigateBackBtn />
    </div>

    <h1 className="font-semibold">
      {page === "edit_profile"
        ? "Edit profile"
        : page === "notifications"
        ? "Notifications"
        : page === "account_privacy"
        ? "Account Privacy"
        : page === "close_friends"
        ? "Close Friends"
        : page === "blocked_accounts"
        ? "Blocked Accounts"
        : page === "story_and_live"
        ? "Story And Live"
        : page === "messages_and_story_replies"
        ? "Messages And Story Replies"
        : page === "tags_and_mentions"
        ? "Tags And Mentions"
        : page === "comments"
        ? "Comments"
        : page === "sharing_and_reuse"
        ? "Sharing And Reuse"
        : page === "restricted_accounts"
        ? "Restricted Accounts"
        : page === "hidden_words"
        ? "Hidden Words"
        : page === "language"
        ? "Language"
        : page === "muted_accounts"
        ? "Muted Accounts"
        : page === "content_preferences"
        ? "Content Preferences"
        : page === "like_and_share_counts"
        ? "Like And Share Counts"
        : page === "archiving_and_downloading"
        ? "Archiving And Downloading"
        : page === "website_permissions"
        ? "Website Permissions"
        : page === "account_type_and_tools"
        ? "Account Type And Tools"
        : page === "help"
        ? "Help"
        : page === "account_status"
        ? "Account Status"
        : "Settings And privacy"}
    </h1>
  </div>
);

export default function TopNavbar() {
  const url = useLocation().pathname.split("/");

  return (
    <nav
      id="topNav"
      className="block md:hidden absolute inset-x-0 top-0 h-[60px] pointer-events-auto overflow-x-auto"
    >
      <div className="size-full flex gap-2 justify-between items-center px-4 bg-black text-white border-b border-b-[rgb(38,38,38,0.7)]">
        {url[1] === "settings" ? (
          <Settings page={url[2]} />
        ) : url[1] === "direct" ? (
          <Messenger />
        ) : url[1] === "username" ? (
          <Profile />
        ) : (
          <Home />
        )}
      </div>
    </nav>
  );
}
