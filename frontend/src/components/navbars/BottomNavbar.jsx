import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import SearchIcon from "icons/SearchIcon";
import TransitionLink from "components/TransitionLink";
import NotificationsIcon from "icons/NotificationsIcon";
import ProfilePicture from "components/ProfilePicture";

export default function BottomNavbar() {
  return (
    <nav className="absolute bg-primary text-primary block md:hidden inset-x-0 bottom-0 h-[50px] pointer-events-auto overflow-x-auto">
      <div className="flex border-t border-primary bg-navbar size-full xs:px-4">
        <div className="flex items-center justify-between w-full">
          <TransitionLink
            to="/"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <HomeIcon />
          </TransitionLink>

          <TransitionLink
            to="explore"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <SearchIcon />
          </TransitionLink>

          <TransitionLink
            to="reels"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <ReelsIcon />
          </TransitionLink>

          <TransitionLink
            to="notifications"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <NotificationsIcon />
          </TransitionLink>

          <TransitionLink
            to="username"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <ProfilePicture className="size-6" storyPadding="0px" />
          </TransitionLink>
        </div>
      </div>
    </nav>
  );
}
