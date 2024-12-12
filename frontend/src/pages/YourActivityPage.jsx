import { cn } from "utils/cn";
import IIcon from "icons/IIcon";
import { useState } from "react";
import LikeIcon from "icons/LikeIcon";
import Footer from "components/Footer";
import PostsIcon from "icons/PostsIcon";
import ReelsIcon from "icons/ReelsIcon";
import EmailIcon from "icons/EmailIcon";
import ReviewsIcon from "icons/ReviewsIcon";
import Separator from "components/Separator";
import CommentsIcon from "icons/CommentsIcon";
import DownloadIcon from "icons/DownloadIcon";
import ActivityIcon from "icons/ActivityIcon";
import MobileAppIcon from "icons/MobileAppIcon";
import Button from "components/wrappers/Button";
import AdActivityIcon from "icons/AdActivityIcon";
import HighlightsIcon from "icons/HighlightsIcon";
import InteractionsIcon from "icons/InteractionsIcon";
import StoryRepliesIcon from "icons/StoryRepliesIcon";
import AccountHistoryIcon from "icons/AccountHistoryIcon";
import PhotosAndVideosIcon from "icons/PhotosAndVideosIcon";
import SplashScreen from "components/wrappers/SplashScreen";

const InteractionsTab = () => {
  const [activeTab, setActiveTab] = useState("likesTab");

  return (
    <div className="flex flex-col flex-1 px-6">
      <div className="h-14 justify-center flex items-center border-b border-b-[rgb(54,54,54)]">
        <div className="flex items-center gap-4 lg:gap-14">
          <a
            onClick={() => setActiveTab("likesTab")}
            className="relative flex items-center gap-1"
          >
            <LikeIcon className="size-3" />
            <span className="text-xs font-semibold">LIKES</span>
            {activeTab === "likesTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>

          <a
            onClick={() => setActiveTab("commentsTab")}
            className="relative flex items-center gap-1"
          >
            <CommentsIcon className="size-3" />
            <span className="text-xs font-semibold">COMMENTS</span>
            {activeTab === "commentsTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>

          <a
            onClick={() => setActiveTab("storyRepliesTab")}
            className="relative flex items-center gap-1"
          >
            <StoryRepliesIcon className="size-3" />
            <span className="text-xs font-semibold">STORY REPLIES</span>
            {activeTab === "storyRepliesTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>

          <a
            onClick={() => setActiveTab("reviewsTab")}
            className="relative flex items-center gap-1"
          >
            <ReviewsIcon className="size-3" />
            <span className="text-xs font-semibold">REVIEWS</span>
            {activeTab === "reviewsTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>
        </div>
      </div>

      <div className="flex justify-center flex-1">
        {activeTab === "likesTab" ? (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">
              You haven&apos;t liked anything
            </h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you like a photo or video, it&apos;ll show up here.
            </p>
          </div>
        ) : activeTab === "commentsTab" ? (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">
              You haven&apos;t commented on anything
            </h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you comment on a photo or video, it&apos;ll show up here.
            </p>
          </div>
        ) : activeTab === "storyRepliesTab" ? (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">
              You haven&apos;t responded to any stickers
            </h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you reply to someone else&apos;s sticker, it&apos;ll show up
              here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">No review activity</h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you submit reviews on Instagram they will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const PhotosAndVideosTab = () => {
  const [activeTab, setActiveTab] = useState("postsTab");

  return (
    <div className="flex flex-col flex-1 px-6">
      <div className="h-14 flex items-center justify-center border-b border-b-[rgb(54,54,54)]">
        <div className="flex items-center gap-14">
          <a
            onClick={() => setActiveTab("postsTab")}
            className="relative flex items-center gap-1"
          >
            <PostsIcon className="size-3" />
            <span className="text-xs font-semibold">POSTS</span>

            {activeTab === "postsTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>

          <a
            onClick={() => setActiveTab("reelsTab")}
            className="relative flex items-center gap-1"
          >
            <ReelsIcon className="size-3" />
            <span className="text-xs font-semibold">REELS</span>

            {activeTab === "reelsTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>

          <a
            onClick={() => setActiveTab("highlightsTab")}
            className="relative flex items-center gap-1"
          >
            <HighlightsIcon className="size-3" />
            <span className="text-xs font-semibold">HIGHLIGHTS</span>

            {activeTab === "highlightsTab" && (
              <div className="h-[2px] bg-white -inset-x-2 absolute -bottom-5" />
            )}
          </a>
        </div>
      </div>

      <div className="flex justify-center flex-1">
        {activeTab === "postsTab" ? (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">
              You haven&apos;t posted anything
            </h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you create a post, it&apos;ll show up here.
            </p>
          </div>
        ) : activeTab === "reelsTab" ? (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">
              You haven&apos;t made any reels
            </h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you create a reel, it&apos;ll show up here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <img src="images/exclamation.webp" className="size-24" />
            <h1 className="text-2xl font-bold">
              You haven&apos;t made any highlights
            </h1>
            <p className="text-sm text-[rgb(168,168,168)]">
              When you create a highlight, it&apos;ll show up here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const AccountHistoryTab = () => (
  <div className="flex flex-col flex-1 gap-2 p-6">
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-sm font-bold">About account history</h1>

        <p className="text-sm text-[rgb(138,138,138)]">
          Review changes you&apos;ve made to your account since you created it.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-bold">Newest to oldest</span>
        <button className="border border-[rgb(54,54,54)] px-4 py-2 rounded-md text-sm font-bold">
          Sort & Filter
        </button>
      </div>
    </div>

    <Separator straight={true} />

    <div className="flex flex-col gap-4 px-4 py-2">
      <h1 className="font-semibold">Today</h1>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <EmailIcon className="size-6" />
          <div>
            <span>Email</span>
            <p className="text-sm text-[rgb(168,168,168)]">
              Your changed your email address to{" "}
              <span className="font-semibold">example@gmail.com</span> 1h
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <IIcon className="size-6" />
          <div>
            <span>Account created</span>
            <p className="text-sm text-[rgb(168,168,168)]">
              Your account was created on{" "}
              <span className="font-semibold text-[rgb(138,138,138)]">
                December 14, 2022
              </span>{" "}
              1h
            </p>
          </div>
        </div>
      </div>
    </div>

    <Separator straight={true} />
  </div>
);

const AdActivityTab = () => (
  <div className="flex flex-col flex-1 h-[500px] gap-4 py-6 overflow-auto px-14">
    <h1 className="text-lg">Ad activity</h1>
    <p className="text-sm text-[rgb(138,138,138)]">
      See the ads you&apos;ve recently interacted with and learn more about the
      brands behind them.
    </p>
    <div className="border border-[rgb(54,54,54)] p-4 gap-4 flex items-center">
      <MobileAppIcon />
      <p className="text-sm">
        Use the mobile app for the full ad activity experience.
      </p>
    </div>

    <Separator straight={true} />

    <div className="flex flex-col gap-4 px-4 py-2">
      <h1 className="text-sm font-semibold">Recently Clicked Stories Ads</h1>
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
        <ActivityIcon />
        <h2 className="text-xl">No Recent Activity</h2>
        <p className="text-sm text-[rgb(138,138,138)]">
          You haven&apos;t interacted with any ads in the last 90 days.
        </p>
      </div>
    </div>

    <Separator straight={true} />

    <div className="flex flex-col gap-4 px-4 py-2">
      <h1 className="text-sm font-semibold">Recently Clicked Feed Ads</h1>
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
        <ActivityIcon />
        <h2 className="text-xl">No Recent Activity</h2>
        <p className="text-sm text-[rgb(138,138,138)]">
          You haven&apos;t interacted with any ads in the last 90 days.
        </p>
      </div>
    </div>
  </div>
);

const DownloadYourInformationTab = () => (
  <div className="flex flex-col flex-1 h-full gap-4 px-10 py-10 lg:px-32">
    <h1 className="text-2xl font-semibold">
      Download your information in Accounts Center
    </h1>
    <p className="text-sm text-[rgb(138,138,138)]">
      From now on, visit Accounts Center to manage this setting.{" "}
      <a className="text-white hover:underline">Learn more</a> about your
      settings in Accounts Center.
    </p>
    <Button className="w-24">Continue</Button>
  </div>
);

export default function YourActivityPage() {
  const [activeTab, setActiveTab] = useState("interactionsTab");

  return (
    <SplashScreen>
      <main className="h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
        <div className="flex justify-center w-full md:px-6 xl:px-36">
          <div className="flex w-full mt-10 rounded-md border border-[rgb(54,54,54)]">
            <div className="w-[240px] flex flex-col border-r border-r-[rgb(54,54,54)]">
              <div className="p-4 h-14 border-b border-b-[rgb(54,54,54)]">
                <h1 className="font-bold">Your Activity</h1>
              </div>

              <div className="flex flex-col">
                <a
                  onClick={() => setActiveTab("interactionsTab")}
                  className="flex items-start gap-8 p-3 hover:bg-[rgb(18,18,18)]"
                >
                  <InteractionsIcon className="size-12" />
                  <div className="flex flex-col">
                    <h1
                      className={cn(
                        "text-sm",
                        activeTab === "interactionsTab"
                          ? "font-bold"
                          : "font-normal"
                      )}
                    >
                      Interactions
                    </h1>
                    <p className="text-xs text-[rgb(168,168,168)]">
                      Review and delete likes, comments and your other
                      interactions.
                    </p>
                  </div>
                </a>

                <a
                  onClick={() => setActiveTab("photosAndVideosTab")}
                  className="flex items-start gap-8 p-3 hover:bg-[rgb(18,18,18)]"
                >
                  <PhotosAndVideosIcon className="size-12" />
                  <div className="flex flex-col">
                    <h1
                      className={cn(
                        "text-sm",
                        activeTab === "photosAndVideosTab"
                          ? "font-bold"
                          : "font-normal"
                      )}
                    >
                      Photos and videos
                    </h1>
                    <p className="text-xs text-[rgb(168,168,168)]">
                      View, archive or delete photos and videos you&apos;ve
                      shared.
                    </p>
                  </div>
                </a>

                <a
                  onClick={() => setActiveTab("accountHistoryTab")}
                  className="flex items-start gap-8 p-3 hover:bg-[rgb(18,18,18)]"
                >
                  <AccountHistoryIcon className="size-12" />
                  <div className="flex flex-col">
                    <h1
                      className={cn(
                        "text-sm",
                        activeTab === "accountHistoryTab"
                          ? "font-bold"
                          : "font-normal"
                      )}
                    >
                      Account history
                    </h1>
                    <p className="text-xs text-[rgb(168,168,168)]">
                      Review changes you&apos;ve made to your account since you
                      created it.
                    </p>
                  </div>
                </a>

                <a
                  onClick={() => setActiveTab("adActivityTab")}
                  className="flex items-start gap-8 p-3 hover:bg-[rgb(18,18,18)]"
                >
                  <AdActivityIcon className="size-12" />
                  <div className="flex flex-col">
                    <h1
                      className={cn(
                        "text-sm",
                        activeTab === "adActivityTab"
                          ? "font-bold"
                          : "font-normal"
                      )}
                    >
                      Ad activity
                    </h1>
                    <p className="text-xs text-[rgb(168,168,168)]">
                      See which ads you&apos;ve interacted with recently.
                    </p>
                  </div>
                </a>

                <a
                  onClick={() => setActiveTab("downloadYourInformationTab")}
                  className="flex items-start gap-8 p-3 hover:bg-[rgb(18,18,18)]"
                >
                  <DownloadIcon className="size-12" />
                  <div className="flex flex-col">
                    <h1
                      className={cn(
                        "text-sm",
                        activeTab === "downloadYourInformationTab"
                          ? "font-bold"
                          : "font-normal"
                      )}
                    >
                      Download your information
                    </h1>
                    <p className="text-xs text-[rgb(168,168,168)]">
                      Download a copy of the information you&apos;ve shared with
                      instagram.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {activeTab === "interactionsTab" ? (
              <InteractionsTab />
            ) : activeTab === "photosAndVideosTab" ? (
              <PhotosAndVideosTab />
            ) : activeTab === "accountHistoryTab" ? (
              <AccountHistoryTab />
            ) : activeTab === "adActivityTab" ? (
              <AdActivityTab />
            ) : activeTab === "downloadYourInformationTab" ? (
              <DownloadYourInformationTab />
            ) : null}
          </div>
        </div>

        <div className="hidden my-10 md:block">
          <Footer />
        </div>
      </main>
    </SplashScreen>
  );
}
