import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import { Link } from "react-router-dom";
import ExploreIcon from "icons/ExploreIcon";
import MessengerIcon from "icons/MessengerIcon";

export default function BottomNavbar() {
  return (
    <nav
      id="bottomNav"
      className="absolute block md:hidden inset-x-0 bottom-0 h-[50px] pointer-events-auto overflow-x-auto"
    >
      <div className="size-full flex border-t border-t-[rgb(38,38,38,0.7)] bg-black text-white xs:px-4">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <HomeIcon />
          </Link>

          <Link
            to="explore"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <ExploreIcon />
          </Link>

          <Link
            to="reels"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <ReelsIcon />
          </Link>

          <Link
            to="direct/inbox"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <MessengerIcon />
          </Link>

          <Link
            to="username"
            className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3"
          >
            <img
              className="size-[24px] rounded-full"
              src="images/default_dp_dark.webp"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
