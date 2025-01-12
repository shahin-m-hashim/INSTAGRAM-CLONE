import { cn } from "utils/cn";
import useStore from "store/_store";
import SaveIcon from "icons/SaveIcon";
import Footer from "components/Footer";
import PostsIcon from "icons/PostsIcon";
import TaggedIcon from "icons/TaggedIcon";
import Separator from "components/Separator";
import SettingsIcon from "icons/SettingsIcon";
import { Outlet, useLocation } from "react-router-dom";
import ProfilePicture from "components/ProfilePicture";
import TransitionLink from "components/TransitionLink";

export default function ProfileLayout() {
  const activeTab = useLocation().pathname.split("/")[2];
  const setPrimaryWidget = useStore((state) => state.setPrimaryWidget);

  return (
    <main className="bg-primary text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex min-h-screen lg:px-6 xl:px-36">
        <div className="flex flex-col py-10 md:py-16 size-full">
          <div className="flex flex-col w-full gap-8 md:gap-14">
            <div className="flex items-center justify-center flex-1 mx-8 md:mx-16 md:gap-10 md:items-start lg:gap-20">
              <div className="flex flex-1 md:flex-initial">
                <ProfilePicture
                  id="layout-profile-pic"
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

                    <button
                      type="button"
                      onClick={() => setPrimaryWidget("settings")}
                      className="items-center justify-center hidden h-full md:flex"
                    >
                      <SettingsIcon />
                    </button>
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
                <div className="relative rounded-full size-16 md:size-[5.5rem] border-2 border-tertiary">
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

            <div className="flex w-full">
              <div className="flex flex-col items-center flex-1 py-2.5">
                <span>0</span>
                <span className="text-sm text-tertiary">posts</span>
              </div>

              <div className="flex flex-col items-center flex-1 py-2.5">
                <span>0</span>
                <span className="text-sm text-tertiary">followers</span>
              </div>

              <div className="flex flex-col items-center flex-1 py-2.5">
                <span>0</span>
                <span className="text-sm text-tertiary">following</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5 md:items-center md:my-10">
            <Separator straight={true} />

            <div className="flex text-sm font-semibold md:gap-14">
              <TransitionLink
                to="/username"
                className="relative flex items-center justify-center flex-1 gap-2 py-2.5"
              >
                {!activeTab && (
                  <div className="absolute inset-x-0 top-0 md:-inset-x-2">
                    <Separator straight={true} className="bg-secondary" />
                  </div>
                )}

                <PostsIcon
                  className={cn(
                    !activeTab ? "text-link-primary" : "text-primary",
                    "size-6 md:size-3"
                  )}
                />
                <span
                  className={cn(
                    !activeTab ? "text-primary" : "text-tertiary",
                    "hidden md:block"
                  )}
                >
                  POSTS
                </span>
              </TransitionLink>

              <TransitionLink
                to="saved"
                className="relative flex items-center justify-center flex-1 gap-2 py-2.5"
              >
                {activeTab === "saved" && (
                  <div className="absolute inset-x-0 md:-inset-x-2 bottom-[2.8rem] md:bottom-10">
                    <Separator straight={true} className="bg-secondary" />
                  </div>
                )}
                <SaveIcon
                  className={cn(
                    activeTab === "saved"
                      ? "text-link-primary hover:text-link-primary-hover md:"
                      : "text-tertiary",
                    "size-6 md:size-3"
                  )}
                />
                <span
                  className={cn(
                    activeTab === "saved" ? "text-primary" : "text-tertiary",
                    "hidden md:block"
                  )}
                >
                  SAVED
                </span>
              </TransitionLink>

              <TransitionLink
                to="tagged"
                className="relative flex items-center justify-center flex-1 gap-2 py-2.5"
              >
                {activeTab === "tagged" && (
                  <div className="absolute inset-x-0 md:-inset-x-2 bottom-[2.8rem] md:bottom-10">
                    <Separator straight={true} className="bg-secondary" />
                  </div>
                )}

                <TaggedIcon
                  className={cn(
                    activeTab === "tagged"
                      ? "text-link-primary hover:text-link-primary-hover md:"
                      : "text-tertiary",
                    "size-6 md:size-3"
                  )}
                />
                <span
                  className={cn(
                    activeTab === "tagged" ? "text-primary" : "text-tertiary",
                    "hidden md:block"
                  )}
                >
                  TAGGED
                </span>
              </TransitionLink>
            </div>

            <div className="md:hidden">
              <Separator straight={true} />
            </div>
          </div>

          <div className="flex flex-col min-h-[280px]">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
