import { cn } from "utils/cn";
import HomeIcon from "icons/HomeIcon";
import ReelsIcon from "icons/ReelsIcon";
import SearchIcon from "icons/SearchIcon";
import CreateIcon from "icons/CreateIcon";
import ExploreIcon from "icons/ExploreIcon";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import HamburgerIcon from "icons/HamburgerIcon";
import MessengerIcon from "icons/MessengerIcon";
import GlobalContext from "providers/GlobalProvider";
import ProfilePicture from "components/ProfilePicture";
import TransitionLink from "components/TransitionLink";
import InstagramTextIcon from "icons/InstagramTextIcon";
import InstagramLogoIcon from "icons/InstagramLogoIcon";
import NotificationsIcon from "icons/NotificationsIcon";
import SearchSidebar from "components/sidebars/SearchSidebar";
import NotificationsSidebar from "components/sidebars/NotificationsSidebar";

export default function MainSidebar() {
  const url = useLocation().pathname.split("/");
  const { setActiveWidget } = useContext(GlobalContext);
  const [activeSidebar, setActiveSidebar] = useState(null);

  const isCollapsed = url[1] === "direct";

  return (
    <>
      {activeSidebar === "search" && <SearchSidebar />}
      {activeSidebar === "notifications" && <NotificationsSidebar />}

      <div
        className={cn(
          isCollapsed || activeSidebar ? "w-[80px]" : "w-[80px] xl:w-[250px]",
          "bg-primary text-primary hidden md:block absolute inset-y-0 left-0 pointer-events-auto overflow-y-auto"
        )}
      >
        <div className="flex flex-col px-2 py-4 border-r border-primary size-full xl:px-4 ">
          <div className="xl:my-4">
            <TransitionLink
              to="/"
              className={cn(
                isCollapsed || activeSidebar ? "flex" : "flex xl:hidden",
                "items-center justify-center px-2.5 py-3 rounded-md hover:bg-sidebar-hover gap-4 size-full"
              )}
            >
              <InstagramLogoIcon />
            </TransitionLink>

            <TransitionLink
              to="/"
              className={cn(
                isCollapsed || activeSidebar ? "hidden" : "hidden xl:block",
                "px-2.5 py-3"
              )}
            >
              <InstagramTextIcon />
            </TransitionLink>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 w-full xl:justify-start">
            <div className="flex flex-col items-center justify-between w-full gap-2">
              <TransitionLink
                to="/"
                className="flex items-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover justify-center xl:justify-start gap-4 size-full"
              >
                <HomeIcon isActive={!url[1] && !activeSidebar} />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Home</span>
                  ))}
              </TransitionLink>

              <button
                type="button"
                onClick={() =>
                  setActiveSidebar((prev) =>
                    prev === "search" ? null : "search"
                  )
                }
                className={cn(
                  activeSidebar === "search" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <SearchIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Search</span>
                  ))}
              </button>

              <TransitionLink
                to="explore"
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover gap-4 xl:justify-start size-full"
              >
                <ExploreIcon
                  isActive={url[1] === "explore" && !activeSidebar}
                />

                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Explore</span>
                  ))}
              </TransitionLink>

              <TransitionLink
                to="reels"
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover gap-4 xl:justify-start size-full"
              >
                <ReelsIcon isActive={url[1] === "reels" && !activeSidebar} />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Reels</span>
                  ))}
              </TransitionLink>

              <TransitionLink
                to="direct/inbox"
                className={cn(
                  activeSidebar === "messenger" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover justify-center xl:justify-start gap-4 flex size-full"
                )}
              >
                <MessengerIcon
                  isActive={url[1] === "direct" && !activeSidebar}
                />

                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Messages</span>
                  ))}
              </TransitionLink>

              <button
                onBlur={() => setActiveSidebar(null)}
                onClick={() =>
                  setActiveSidebar((prev) =>
                    prev === "notifications" ? null : "notifications"
                  )
                }
                className={cn(
                  activeSidebar === "notifications" && "outline-1 outline",
                  "items-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover justify-center xl:justify-start gap-4 flex size-full"
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
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover gap-4 xl:justify-start size-full"
              >
                <CreateIcon />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Create</span>
                  ))}
              </button>

              <TransitionLink
                to="username"
                className="flex items-center justify-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover gap-4 xl:justify-start size-full"
              >
                <ProfilePicture
                  storyPadding="0px"
                  className="border border-primary size-7"
                />
                {isCollapsed ||
                  (!activeSidebar && (
                    <span className="hidden xl:block">Profile</span>
                  ))}
              </TransitionLink>
            </div>
          </div>

          <div>
            <button
              onClick={() =>
                setActiveWidget((prev) => (prev === "more" ? null : "more"))
              }
              className="flex items-center flex-col xl:flex-row px-2.5 py-3 rounded-md hover:bg-sidebar-hover justify-center xl:justify-start w-full gap-4"
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
