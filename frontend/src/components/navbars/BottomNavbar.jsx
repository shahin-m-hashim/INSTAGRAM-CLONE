import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import ExploreIcon from "icons/ExploreIcon";
import MessengerIcon from "icons/MessengerIcon";
import TransitionLink from "components/TransitionLink";

export default function BottomNavbar() {
  return (
    <nav className="absolute bg-primary text-primary block md:hidden inset-x-0 bottom-0 h-[50px] pointer-events-auto overflow-x-auto">
      <div className="flex border-t bg-navbar size-full xs:px-4">
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
            <ExploreIcon />
          </TransitionLink>

          <TransitionLink
            to="reels"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <ReelsIcon />
          </TransitionLink>

          <TransitionLink
            to="direct/inbox"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <MessengerIcon />
          </TransitionLink>

          <TransitionLink
            to="username"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <img
              className="size-[24px] rounded-full"
              src="images/default_dp_dark.webp"
            />
          </TransitionLink>
        </div>
      </div>
    </nav>
  );
}
