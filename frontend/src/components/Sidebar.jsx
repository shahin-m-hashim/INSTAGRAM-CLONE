import { cn } from "utils/cn";
import { useState } from "react";
import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import SearchIcon from "icons/SearchIcon";
import CreateIcon from "icons/CreateIcon";
import ExploreIcon from "icons/ExploreIcon";
import HamburgerIcon from "icons/HamburgerIcon";
import MessengerIcon from "icons/MessengerIcon";
import ProfilePicture from "components/ProfilePicture";
import InstagramTextIcon from "icons/InstagramTextIcon";
import InstagramLogoIcon from "icons/InstagramLogoIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import SearchSidebar from "components/sidebars/SearchSidebar";
import NotificationsSidebar from "components/sidebars/NotificationsSidebar";

export default function Sidebar({ setActiveWidget }) {
  const isCollapsed = false;
  const [activeSidebar, setActiveSidebar] = useState(null);

  const handleSidebar = (sidebar) =>
    activeSidebar === sidebar
      ? setActiveSidebar(null)
      : setActiveSidebar(sidebar);

  return (
    <>
      {activeSidebar === "notifications" ? (
        <NotificationsSidebar />
      ) : activeSidebar === "search" ? (
        <SearchSidebar />
      ) : null}

      <div
        className={cn(
          isCollapsed || activeSidebar ? "w-[80px]" : "w-[80px] xl:w-[250px]",
          "hidden md:block absolute inset-y-0 left-0 pointer-events-auto"
        )}
      >
        <div className="size-full bg-black flex-col py-4 px-2 xl:px-4 flex border-r border-r-[rgb(38,38,38,0.7)] text-[rgb(245,245,245)]">
          <div className="xl:my-4">
            <a
              className={cn(
                isCollapsed || activeSidebar ? "flex" : "flex xl:hidden",
                "items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 size-full"
              )}
            >
              <InstagramLogoIcon />
            </a>

            <a
              className={cn(
                isCollapsed || activeSidebar ? "hidden" : "hidden xl:block",
                "px-2.5 py-3"
              )}
            >
              <InstagramTextIcon />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 w-full xl:justify-start">
            <div className="flex flex-col items-center justify-between w-full gap-2">
              <a className="flex items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 size-full">
                <HomeIcon active={true} />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Home</span>
                  ))}
              </a>

              <button
                onClick={() => handleSidebar("search")}
                className={cn(
                  activeSidebar === "search" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <SearchIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Search</span>
                  ))}
              </button>

              <a className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <ExploreIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Explore</span>
                  ))}
              </a>

              <button className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <ReelsIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Reels</span>
                  ))}
              </button>

              <a
                className={cn(
                  activeSidebar === "messenger" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <MessengerIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Messages</span>
                  ))}
              </a>

              <button
                onClick={() => handleSidebar("notifications")}
                className={cn(
                  activeSidebar === "notifications" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <NotificationsIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Notifications</span>
                  ))}
              </button>

              <button
                onClick={() => setActiveWidget("createNewPost")}
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full"
              >
                <CreateIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Create</span>
                  ))}
              </button>

              <a className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full">
                <ProfilePicture className="size-7" />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Profile</span>
                  ))}
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={() =>
                setActiveWidget((prev) => (prev === "more" ? null : "more"))
              }
              className="flex items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start w-full gap-4"
            >
              <HamburgerIcon />
              {isCollapsed ||
                (!activeSidebar && (
                  <span className="hidden xl:block">More</span>
                ))}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
