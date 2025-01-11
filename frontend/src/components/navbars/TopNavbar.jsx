import { useLocation } from "react-router-dom";
import HomeHeader from "components/navbars/TopNavbar/HomeHeader";
import ExploreHeader from "components/navbars/TopNavbar/ExploreHeader";
import ProfileHeader from "components/navbars/TopNavbar/ProfileHeader";
import ActivityHeader from "components/navbars/TopNavbar/ActivityHeader";
import SettingsHeader from "components/navbars/TopNavbar/SettingsHeader";
import MessengerHeader from "components/navbars/TopNavbar/MessengerHeader";
import NotificationsHeader from "components/navbars/TopNavbar/NotificationsHeader";
import { cn } from "utils/cn";

export default function TopNavbar() {
  const url = useLocation().pathname.split("/");

  return (
    <nav
      className={cn(
        url[1] === "reels" ? "hidden" : "block",
        "bg-primary text-primary h-[60px] md:hidden absolute inset-x-0 top-0 pointer-events-auto overflow-x-auto"
      )}
    >
      <div className="flex items-center justify-between gap-2 px-4 border-b border-tertiary size-full ">
        {url[1] === "settings" ? (
          <SettingsHeader page={url.slice(2)} />
        ) : url[1] === "direct" ? (
          <MessengerHeader page={url.slice(1)} />
        ) : url[1] === "username" ? (
          <ProfileHeader />
        ) : url[1] === "your_activity" ? (
          <ActivityHeader page={url.slice(2)} />
        ) : url[1] === "notifications" ? (
          <NotificationsHeader />
        ) : url[1] === "explore" ? (
          <ExploreHeader />
        ) : (
          <HomeHeader />
        )}
      </div>
    </nav>
  );
}
