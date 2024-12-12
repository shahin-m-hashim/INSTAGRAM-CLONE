import { cn } from "utils/cn";
import { useState } from "react";
import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import SearchIcon from "icons/SearchIcon";
import CreateIcon from "icons/CreateIcon";
import ExploreIcon from "icons/ExploreIcon";
import HamburgerIcon from "icons/HamburgerIcon";
import MessengerIcon from "icons/MessengerIcon";
import { Link, useLocation } from "react-router-dom";
import ProfilePicture from "components/ProfilePicture";
import InstagramTextIcon from "icons/InstagramTextIcon";
import InstagramLogoIcon from "icons/InstagramLogoIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import SearchSidebar from "components/sidebars/SearchSidebar";
import NotificationsSidebar from "components/sidebars/NotificationsSidebar";

export default function MainSidebar({ setActiveWidget }) {
  const activePage = useLocation().pathname;
  const isCollapsed = activePage === "/direct/inbox";
  const [activeSidebar, setActiveSidebar] = useState(null);

  return (
    <>
      {activeSidebar === "search" && <SearchSidebar />}
      {activeSidebar === "notifications" && <NotificationsSidebar />}

      <div
        className={cn(
          isCollapsed || activeSidebar ? "w-[80px]" : "w-[80px] xl:w-[250px]",
          "hidden md:block absolute inset-y-0 left-0 pointer-events-auto"
        )}
      >
        <div className="size-full bg-black flex-col py-4 px-2 xl:px-4 flex border-r border-r-[rgb(38,38,38,0.7)] text-[rgb(245,245,245)]">
          <div className="xl:my-4">
            <Link
              to="/"
              className={cn(
                isCollapsed || activeSidebar ? "flex" : "flex xl:hidden",
                "items-center justify-center px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 size-full"
              )}
            >
              <InstagramLogoIcon />
            </Link>

            <Link
              to="/"
              className={cn(
                isCollapsed || activeSidebar ? "hidden" : "hidden xl:block",
                "px-2.5 py-3"
              )}
            >
              <InstagramTextIcon />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 w-full xl:justify-start">
            <div className="flex flex-col items-center justify-between w-full gap-2">
              <Link
                to="/"
                className="flex items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 size-full"
              >
                <HomeIcon isActive={activePage === "/" && !activeSidebar} />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Home</span>
                  ))}
              </Link>

              <button
                onBlur={() => setActiveSidebar(null)}
                onClick={() =>
                  setActiveSidebar((prev) =>
                    prev === "search" ? null : "search"
                  )
                }
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

              <Link
                to="explore"
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full"
              >
                <ExploreIcon
                  isActive={activePage === "/explore" && !activeSidebar}
                />

                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Explore</span>
                  ))}
              </Link>

              <Link
                to="reels"
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full"
              >
                <ReelsIcon
                  isActive={activePage === "/reels" && !activeSidebar}
                />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Reels</span>
                  ))}
              </Link>

              <Link
                to="direct/inbox"
                className={cn(
                  activeSidebar === "messenger" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <MessengerIcon
                  isActive={activePage === "/direct/inbox" && !activeSidebar}
                />

                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Messages</span>
                  ))}
              </Link>

              <button
                onBlur={() => setActiveSidebar(null)}
                onClick={() =>
                  setActiveSidebar((prev) =>
                    prev === "notifications" ? null : "notifications"
                  )
                }
                className={cn(
                  activeSidebar === "notifications" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-300 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <NotificationsIcon
                  isActive={activeSidebar === "notifications"}
                />

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

              <Link
                to="profile"
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(38,38,38,0.7)] gap-4 xl:justify-start size-full"
              >
                <ProfilePicture className="size-7" />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Profile</span>
                  ))}
              </Link>
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
