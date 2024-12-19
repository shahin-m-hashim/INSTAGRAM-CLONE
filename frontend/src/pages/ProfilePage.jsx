import { cn } from "utils/cn";
import { useState } from "react";
import SaveIcon from "icons/SaveIcon";
import Footer from "components/Footer";
import PostsIcon from "icons/PostsIcon";
import TaggedIcon from "icons/TaggedIcon";
import Separator from "components/Separator";
import SettingsIcon from "icons/SettingsIcon";
import Button from "components/wrappers/Button";
import AddPhoneNoIcon from "icons/AddPhoneNoIcon";
import SharePhotosIcon from "icons/SharePhotosIcon";
import PhotosOfYouIcon from "icons/PhotosOfYouIcon";
import RoundedSavedIcon from "icons/RoundedSavedIcon";
import ProfilePicture from "components/ProfilePicture";
import TransitionLink from "components/TransitionLink";
import CompleteProfileIcon from "icons/CompleteProfileIcon";
import AddProfilePhotoIcon from "icons/AddProfilePhotoIcon";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

const items = [
  {
    icon: SharePhotosIcon,
    heading: "Share Photos",
    caption: "When you share photos, they will appear on your profile.",
    button: "Share your first photo",
  },
  {
    icon: AddPhoneNoIcon,
    heading: "Add Phone Number",
    caption:
      "Add your phone number so you can reset your password, find friends and more.",
    button: "Add Phone Number",
  },
  {
    icon: CompleteProfileIcon,
    heading: "Complete Profile",
    caption: "Add your name and bio so friends can find you.",
    button: "Edit Profile",
  },
  {
    icon: AddProfilePhotoIcon,
    heading: "Add Profile Photo",
    caption: "Add a profile photo so friends can recognize you.",
    button: "Add Profile Photo",
  },
];

const PostsTab = () => (
  <div className="flex flex-col w-full gap-4 px-5">
    <h1>Getting Started</h1>
    <HorizontalScroller duration={300}>
      <ul className="flex items-center gap-2">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li
              key={idx}
              className="flex flex-col items-center flex-shrink-0 w-64 gap-4 p-4 border rounded-md border-primary h-60"
            >
              <Icon />
              <p className="text-sm font-semibold">{item.heading}</p>
              <p className="text-xs text-secondary">{item.caption}</p>
              <div className="flex justify-center w-full mt-auto">
                <Button className="min-w-[152px]">{item.button}</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </HorizontalScroller>
  </div>
);

const SavedTab = () => (
  <div className="flex flex-col w-full gap-10 px-5">
    <div className="flex items-center justify-between w-full">
      <p className="text-xs text-secondary">
        Only you can see what you&apos;ve saved
      </p>
      <a className="text-sm font-semibold text-link hover:text-link-hover">
        + New Collection
      </a>
    </div>

    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <RoundedSavedIcon />
        <h1 className="text-4xl font-bold">Save</h1>
        <p className="w-3/5 text-sm">
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you&apos;ve saved.
        </p>
      </div>
    </div>
  </div>
);

const TaggedTab = () => (
  <div className="flex justify-center w-full px-5">
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <PhotosOfYouIcon />
      <h1 className="text-4xl font-bold">Photos of you</h1>
      <p className="text-sm">
        When people tag you in photos, they&apos;ll appear here.
      </p>
    </div>
  </div>
);

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("postsTab");

  return (
    <main className="bg-primary text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex min-h-screen lg:px-6 xl:px-36">
        <div className="flex flex-col py-10 md:py-16 size-full">
          <div className="flex flex-col w-full gap-8 md:gap-14">
            <div className="flex items-center justify-center flex-1 mx-8 md:mx-16 md:gap-10 md:items-start lg:gap-20">
              <div className="flex flex-1 md:flex-initial">
                <ProfilePicture
                  fileType="newProfilePic"
                  requireNoteInput={true}
                  requireFileInput={true}
                  className="size-24 md:size-36"
                />
              </div>

              <div className="flex flex-1">
                <div className="flex flex-col flex-1 gap-4">
                  <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
                    <span className="text-xl font-semibold">Username</span>

                    <TransitionLink
                      to="/settings/edit_profile"
                      className="w-32 px-3 py-1 text-sm font-semibold text-center rounded-md bg-button md:w-auto"
                    >
                      Edit Profile
                    </TransitionLink>

                    <button className="w-32 px-3 py-1 text-sm font-semibold rounded-md bg-button md:w-auto">
                      View Archive
                    </button>

                    <div className="items-center justify-center hidden h-full md:flex">
                      <SettingsIcon />
                    </div>
                  </div>

                  <div className="items-center hidden w-full gap-10 md:flex">
                    <div>
                      <span>0</span>&nbsp;<span>posts</span>
                    </div>

                    <div>
                      <span>0</span>&nbsp;<span>followers</span>
                    </div>

                    <div>
                      <span>0</span>&nbsp;<span>following</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 gap-2 mx-5 md:mx-10">
              <div className="flex flex-col items-center gap-2">
                <div className="relative rounded-full size-16 md:size-[5.5rem] border-2 border-primary">
                  <div className="absolute inset-[3px]">
                    <div className="flex items-center justify-center rounded-full bg-widget size-full">
                      <img
                        alt="add"
                        src="icons/add.svg"
                        className="size-6 md:size-auto"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs font-semibold">New</p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:hidden">
            <Separator straight={true} />
            <div className="flex my-2.5 text-sm justify-evenly size-full">
              <div className="flex flex-col items-center justify-center">
                <span>0</span>
                <span className="text-sm text-secondary">posts</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span>0</span>
                <span className="text-sm text-secondary">followers</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span>0</span>
                <span className="text-sm text-secondary">following</span>
              </div>
            </div>
            <div className="md:hidden">
              <Separator straight={true} />
            </div>
          </div>

          <div className="mb-10 md:mt-10">
            <div className="md:mx-4">
              <Separator straight={true} />
            </div>
            <div className="flex my-5 text-sm font-semibold md:px-6 justify-evenly md:justify-center md:gap-14 size-full">
              <a
                onClick={() => setActiveTab("postsTab")}
                className="relative flex items-center justify-center flex-1 gap-2 md:flex-initial"
              >
                {activeTab === "postsTab" && (
                  <div className="absolute inset-x-0 md:-inset-x-2 bottom-[2.8rem] md:bottom-10 h-[2px] bg-secondary" />
                )}
                <PostsIcon
                  className={cn(
                    activeTab === "postsTab" ? "text-link" : "text-primary",
                    "size-6 md:size-3"
                  )}
                />
                <span
                  className={cn(
                    activeTab === "postsTab" ? "" : " text-primary",
                    "hidden md:block"
                  )}
                >
                  POSTS
                </span>
              </a>

              <a
                onClick={() => setActiveTab("savedTab")}
                className="relative flex items-center justify-center flex-1 gap-2 md:flex-initial"
              >
                {activeTab === "savedTab" && (
                  <div className="absolute inset-x-0 md:-inset-x-2 bottom-[2.8rem] md:bottom-10 h-[2px] bg-secondary" />
                )}
                <SaveIcon
                  className={cn(
                    activeTab === "savedTab"
                      ? "text-link hover:text-link-hover md:"
                      : "",
                    "size-6 md:size-3"
                  )}
                />
                <span
                  className={cn(
                    activeTab === "savedTab" ? "" : " text-secondary",
                    "hidden md:block"
                  )}
                >
                  SAVED
                </span>
              </a>

              <a
                onClick={() => setActiveTab("taggedTab")}
                className="relative flex items-center justify-center flex-1 gap-2 md:flex-initial"
              >
                {activeTab === "taggedTab" && (
                  <div className="absolute inset-x-0 md:-inset-x-2 bottom-[2.8rem] md:bottom-10 h-[2px] bg-secondary" />
                )}

                <TaggedIcon
                  className={cn(
                    activeTab === "taggedTab"
                      ? "text-link hover:text-link-hover md:"
                      : "",
                    "size-6 md:size-3"
                  )}
                />
                <span
                  className={cn(
                    activeTab === "taggedTab" ? "" : " text-secondary",
                    "hidden md:block"
                  )}
                >
                  TAGGED
                </span>
              </a>
            </div>
            <div className="md:hidden">
              <Separator straight={true} />
            </div>
          </div>

          {activeTab === "postsTab" ? (
            <PostsTab />
          ) : activeTab === "savedTab" ? (
            <SavedTab />
          ) : (
            <TaggedTab />
          )}
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
