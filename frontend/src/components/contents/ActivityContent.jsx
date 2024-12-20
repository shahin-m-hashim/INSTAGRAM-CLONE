import { cn } from "utils/cn";
import DownloadIcon from "icons/DownloadIcon";
import { useLocation } from "react-router-dom";
import AdActivityIcon from "icons/AdActivityIcon";
import InteractionsIcon from "icons/InteractionsIcon";
import TransitionLink from "components/TransitionLink";
import AccountHistoryIcon from "icons/AccountHistoryIcon";
import PhotosAndVideosIcon from "icons/PhotosAndVideosIcon";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function ActivityContent() {
  const activePage = useLocation().pathname.split("/")[2];

  return (
    <>
      <div className="px-4 py-7 md:py-4 md:px-6 md:h-14 md:border-b md:border-b-primary">
        <h1 className="hidden font-bold md:block">Your Activity</h1>
        <div className="block text-center md:hidden">
          <h1 className="mb-4 text-2xl font-bold">
            One place to manage your activity
          </h1>
          <p className="text-sm">
            We&apos;ve added more tools for you to review and manage your
            photos, videos, account and activity on Instagram.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <TransitionLink
          to="interactions"
          className="flex items-center gap-8 p-3 hover:bg-sidebar-hover md:border-none border-y border-primary"
        >
          <InteractionsIcon className="min-w-6 md:size-12" />
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-sm",
                activePage === "interactions" ? "font-bold" : "font-normal"
              )}
            >
              Interactions
            </h1>
            <p className="text-xs text-tertiary">
              Review and delete likes, comments and your other interactions.
            </p>
          </div>

          <DropDownArrowIcon className="-rotate-90 md:hidden size-8" />
        </TransitionLink>

        <TransitionLink
          to="photos_and_videos"
          className="flex items-center gap-8 p-3 hover:bg-sidebar-hover md:border-none border-y border-primary"
        >
          <PhotosAndVideosIcon className="min-w-6 md:size-12" />
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-sm",
                activePage === "photos_and_videos" ? "font-bold" : "font-normal"
              )}
            >
              Photos and videos
            </h1>
            <p className="text-xs text-tertiary">
              View, archive or delete photos and videos you&apos;ve shared.
            </p>
          </div>
          <DropDownArrowIcon className="-rotate-90 md:hidden size-8" />
        </TransitionLink>

        <TransitionLink
          to="account_history"
          className="flex items-center gap-8 p-3 hover:bg-sidebar-hover md:border-none border-y border-primary"
        >
          <AccountHistoryIcon className="min-w-6 md:size-12" />
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-sm",
                activePage === "account_history" ? "font-bold" : "font-normal"
              )}
            >
              Account history
            </h1>
            <p className="text-xs text-tertiary">
              Review changes you&apos;ve made to your account since you created
              it.
            </p>
          </div>
          <DropDownArrowIcon className="-rotate-90 md:hidden size-8" />
        </TransitionLink>

        <TransitionLink
          to="ad_activity"
          className="flex items-center gap-8 p-3 hover:bg-sidebar-hover md:border-none border-y border-primary"
        >
          <AdActivityIcon className="min-w-6 md:size-12" />
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-sm",
                activePage === "ad_activity" ? "font-bold" : "font-normal"
              )}
            >
              Ad activity
            </h1>
            <p className="text-xs text-tertiary">
              See which ads you&apos;ve interacted with recently.
            </p>
          </div>
          <DropDownArrowIcon className="-rotate-90 md:hidden size-6" />
        </TransitionLink>

        <TransitionLink
          to="download_your_info"
          className="flex items-center gap-8 p-3 hover:bg-sidebar-hover md:border-none border-y border-primary"
        >
          <DownloadIcon className="min-w-6 md:size-12" />
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-sm",
                activePage === "download_your_info"
                  ? "font-bold"
                  : "font-normal"
              )}
            >
              Download your information
            </h1>
            <p className="text-xs text-tertiary">
              Download a copy of the information you&apos;ve shared with
              instagram.
            </p>
          </div>
          <DropDownArrowIcon className="-rotate-90 md:hidden size-8" />
        </TransitionLink>
      </div>
    </>
  );
}
