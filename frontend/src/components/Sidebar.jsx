import { cn } from "utils/cn";
import { useState } from "react";
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
import SearchSidebar from "components/sidebars/SearchSidebar";
import MessengerSidebar from "components/sidebars/MessengerSidebar";
import NotificationsSidebar from "components/sidebars/NotificationsSidebar";

export default function Sidebar() {
  const [activeSidebar, setActiveSidebar] = useState(null);

  const handleSidebar = (sidebar) =>
    activeSidebar === sidebar
      ? setActiveSidebar(null)
      : setActiveSidebar(sidebar);

  return (
    <>
      <div
        className={cn(
          activeSidebar ? "w-[80px]" : "w-[73px] xl:w-[250px]",
          "hidden md:block absolute inset-y-0 left-0 pointer-events-auto"
        )}
      >
        <div className="size-full bg-black flex-col xl:px-4 px-2 py-4 flex border-r border-r-[rgb(38,38,38,0.7)] text-[rgb(245,245,245)]">
          <div className="xl:my-4">
            {activeSidebar ? (
              <div className="flex items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <InstagramLogoIcon />
              </div>
            ) : (
              <>
                <div className="flex items-center xl:hidden justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 size-full">
                  <InstagramLogoIcon />
                </div>
                <div className="hidden px-2.5 py-3 xl:block">
                  <InstagramTextIcon />
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col items-center justify-center flex-1 w-full xl:justify-start">
            <div className="flex flex-col items-center justify-between w-full gap-2">
              <button className="flex items-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 size-full">
                <HomeIcon active={true} />
                {!activeSidebar && (
                  <span className="hidden xl:block">Home</span>
                )}
              </button>

              <button
                onClick={() => handleSidebar("search")}
                className={cn(
                  activeSidebar === "search" && "outline-1 outline",
                  "items-center px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <SearchIcon />
                {!activeSidebar && (
                  <span className="hidden xl:block">Search</span>
                )}
              </button>

              <button className="flex items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <ExploreIcon />
                {!activeSidebar && (
                  <span className="hidden xl:block">Explore</span>
                )}
              </button>

              <button className="flex items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <ReelsIcon />
                {!activeSidebar && (
                  <span className="hidden xl:block">Reels</span>
                )}
              </button>

              <button
                onClick={() => handleSidebar("messenger")}
                className={cn(
                  activeSidebar === "messenger" && "outline-1 outline",
                  "items-center px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <MessengerIcon />
                {!activeSidebar && (
                  <span className="hidden xl:block">Messages</span>
                )}
              </button>

              <button
                onClick={() => handleSidebar("notifications")}
                className={cn(
                  activeSidebar === "notifications" && "outline-1 outline",
                  "items-center px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <NotificationsIcon />
                {!activeSidebar && (
                  <span className="hidden xl:block">Notifications</span>
                )}
              </button>

              <button className="flex items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <CreateIcon />
                {!activeSidebar && (
                  <span className="hidden xl:block">Create</span>
                )}
              </button>

              <button className="flex items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <img
                  className="size-[24px] rounded-full"
                  src="images/default_dp_dark.webp"
                />
                {!activeSidebar && (
                  <span className="hidden xl:block">Profile</span>
                )}
              </button>
            </div>
          </div>

          <div>
            <button className="flex items-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start w-full gap-4">
              <HamburgerIcon />
              {!activeSidebar && <span className="hidden xl:block">More</span>}
            </button>
          </div>
        </div>
      </div>

      <>
        {activeSidebar === "notifications" ? (
          <NotificationsSidebar />
        ) : activeSidebar === "search" ? (
          <SearchSidebar />
        ) : (
          activeSidebar === "messenger" && <MessengerSidebar />
        )}
      </>
    </>
  );
}
