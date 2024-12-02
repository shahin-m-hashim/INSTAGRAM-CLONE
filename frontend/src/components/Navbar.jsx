import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import SearchIcon from "icons/SearchIcon";
import CreateIcon from "icons/CreateIcon";
import ExploreIcon from "icons/ExploreIcon";
import MessengerIcon from "icons/MessengerIcon";
import HamburgerIcon from "icons/HamburgerIcon";
import InstagramTextIcon from "icons/InstagramTextIcon";
import InstagramLogoIcon from "icons/InstagramLogoIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import SearchField from "components/fields/SearchField";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function Navbar() {
  return (
    <nav className="fixed inset-0 z-10 h-screen pointer-events-none">
      <div className="block md:hidden absolute w-full top-0 h-[60px] pointer-events-auto">
        <div className="size-full bg-black flex items-center gap-3 px-4 border-b border-b-[rgb(38,38,38)] text-[rgb(245,245,245)]">
          <div className="flex gap-2">
            <InstagramTextIcon />
            <div className="pt-1">
              <DropDownArrowIcon />
            </div>
          </div>
          <div className="flex justify-end flex-1 h-full">
            <div className="flex items-center gap-3">
              <div className="h-8">
                <SearchField />
              </div>
              <div className="items-center gap-4">
                <NotificationsIcon />
                <span className="hidden xl:block">Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-0 h-[50px] md:h-full md:w-[73px] xl:w-[250px] pointer-events-auto">
        <div className="size-full bg-black flex flex-col sm:px-6 md:py-10 md:border-r md:border-r-[rgb(38,38,38)] border-t border-t-[rgb(38,38,38)] text-[rgb(245,245,245)]">
          <div className="hidden md:flex">
            <div className="hidden xl:block size-full">
              <InstagramTextIcon />
            </div>
            <div className="xl:hidden size-full">
              <InstagramLogoIcon />
            </div>
          </div>

          <div className="flex flex-1 md:justify-start md:flex-col md:my-12">
            <div className="flex items-center justify-between w-full md:gap-8 md:flex-col">
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <HomeIcon />
                <span className="hidden font-bold xl:block">Home</span>
              </div>
              <div className="items-center hidden gap-4 md:flex size-full">
                <SearchIcon />
                <span className="hidden xl:block">Search</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <ExploreIcon className="fill-red-500" />
                <span className="hidden xl:block">Explore</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <ReelsIcon />
                <span className="hidden xl:block">Reels</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <MessengerIcon />
                <span className="hidden xl:block">Messages</span>
              </div>
              <div className="items-center hidden gap-4 md:flex size-full">
                <NotificationsIcon />
                <span className="hidden xl:block">Notifications</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <CreateIcon />
                <span className="hidden xl:block">Create</span>
              </div>
              <div className="flex items-center justify-center gap-4 xl:justify-start size-full">
                <img
                  className="size-[24px] rounded-full"
                  src="images/default_dp.webp"
                />
                <span className="hidden xl:block">Profile</span>
              </div>
            </div>
          </div>

          <div className="items-center hidden gap-4 md:flex">
            <HamburgerIcon />
            <span className="hidden xl:block">More</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
