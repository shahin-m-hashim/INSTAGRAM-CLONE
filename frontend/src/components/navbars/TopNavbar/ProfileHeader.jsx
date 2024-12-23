import SettingsIcon from "icons/SettingsIcon";
import TransitionLink from "components/TransitionLink";
import NotificationsIcon from "icons/NotificationsIcon";

export default function ProfileHeader() {
  return (
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
}
