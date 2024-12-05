import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import CreateIcon from "icons/CreateIcon";
import ExploreIcon from "icons/ExploreIcon";
import MessengerIcon from "icons/MessengerIcon";

export default function BottomNavbar() {
  return (
    <nav className="absolute block md:hidden inset-x-0 bottom-0 h-[50px] pointer-events-auto">
      <div className="size-full bg-black flex border-t border-t-[rgb(38,38,38,0.7)] text-[rgb(245,245,245)] xs:px-4">
        <div className="flex items-center justify-between w-full">
          <a className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3">
            <HomeIcon />
          </a>

          <a className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3">
            <ExploreIcon />
          </a>

          <a className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3">
            <ReelsIcon />
          </a>

          <a className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3">
            <CreateIcon />
          </a>

          <a className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3">
            <MessengerIcon />
          </a>

          <a className="flex flex-1 items-center justify-center gap-4 px-2.5 py-3">
            <img
              className="size-[24px] rounded-full"
              src="images/default_dp_dark.webp"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
