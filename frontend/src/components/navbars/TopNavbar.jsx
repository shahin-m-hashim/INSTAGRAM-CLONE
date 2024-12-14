import SettingsIcon from "icons/SettingsIcon";
import { Link, useLocation } from "react-router-dom";
import NewMessageIcon from "icons/NewMessageIcon";
import SearchField from "components/fields/SearchField";
import InstagramTextIcon from "icons/InstagramTextIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import NavigateBackBtn from "components/NavigateBackBtn";

const Profile = () => (
  <div className="relative flex items-center justify-center w-full">
    <div className="absolute left-0">
      <Link to="settings">
        <SettingsIcon />
      </Link>
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
        : "Settings And privacy"}
    </h1>
  </div>
);

export default function TopNavbar() {
  const url = useLocation().pathname.replace("/", "").split("/");

  return (
    <nav
      id="topNavbar"
      className="block md:hidden absolute inset-x-0 top-0 h-[60px]"
    >
      <div className="size-full flex gap-2 justify-between items-center px-4 bg-black text-white border-b border-b-[rgb(38,38,38,0.7)]">
        {url[0] === "settings" ? (
          <Settings page={url[1]} />
        ) : url[0] === "direct" ? (
          <Messenger />
        ) : url[0] === "username" ? (
          <Profile />
        ) : (
          <Home />
        )}
      </div>
    </nav>
  );
}
