import PostsIcon from "icons/PostsIcon";
import SavedIcon from "icons/SavedIcon";
import TaggedIcon from "icons/TaggedIcon";
import Separator from "components/Separator";
import SettingsIcon from "icons/SettingsIcon";
import Button from "components/wrappers/Button";
import AddPhoneNoIcon from "icons/AddPhoneNoIcon";
import SharePhotosIcon from "icons/SharePhotosIcon";
import ProfilePicture from "components/ProfilePicture";
import HomeLayout from "components/wrappers/HomeLayout";
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

export default function ProfilePage() {
  return (
    <HomeLayout>
      <div className="flex items-center min-h-screen lg:px-6 xl:px-36">
        <div className="flex flex-col py-10 md:py-16 size-full">
          <div className="flex flex-col w-full gap-8 md:gap-14">
            <div className="flex items-center justify-center flex-1 mx-8 md:mx-16 md:gap-10 md:items-start lg:gap-20">
              <div className="flex flex-1 md:flex-initial">
                <ProfilePicture
                  type="input"
                  hasStory={true}
                  className="size-24 md:size-36"
                />
              </div>

              <div className="flex flex-1">
                <div className="flex flex-col flex-1 gap-4">
                  <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
                    <div className="flex justify-between w-32 md:w-auto md:block md:text-xl">
                      <span>Username</span>
                      <div className="flex md:hidden">
                        <SettingsIcon />
                      </div>
                    </div>

                    <button className="px-3 font-semibold w-32 md:w-auto py-1 text-sm text-white bg-[rgb(54,54,54)] rounded-md">
                      Edit Profile
                    </button>

                    <button className="px-3 font-semibold w-32 md:w-auto py-1 text-sm text-white bg-[rgb(54,54,54)] rounded-md">
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
                <div className="relative rounded-full size-16 md:size-[5.5rem] bg-black border-2 border-[rgb(54,54,54)]">
                  <div className="absolute inset-[3px]">
                    <div className="flex items-center bg-[rgb(18,18,18)] justify-center rounded-full size-full">
                      <img
                        src="icons/add.svg"
                        alt="add"
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
            <div className="flex items-center w-full my-2.5 justify-evenly">
              <div className="flex flex-col items-center justify-center">
                <span>0</span>
                <span className="text-sm text-[rgb(168,168,168)]">posts</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span>0</span>
                <span className="text-sm text-[rgb(168,168,168)]">
                  followers
                </span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span>0</span>
                <span className="text-sm text-[rgb(168,168,168)]">
                  following
                </span>
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
              <div className="relative flex items-center justify-center flex-1 gap-2 md:flex-initial">
                <div className="absolute inset-x-0 md:-inset-x-2 bottom-[2.8rem] md:bottom-10 h-[2px] bg-white"></div>
                <PostsIcon className="size-6 md:size-auto text-[rgb(0,149,246)] md:text-[rgb(245,245,245)]" />
                <span className="text-[rgb(245,245,245)] hidden md:block">
                  POSTS
                </span>
              </div>
              <div className="flex items-center justify-center flex-1 gap-2 md:flex-initial">
                <SavedIcon className="size-6 md:size-auto text-[rgb(168,168,168)]" />
                <span className="text-[rgb(168,168,168)] hidden md:block">
                  SAVED
                </span>
              </div>
              <div className="flex items-center justify-center flex-1 gap-2 md:flex-initial">
                <TaggedIcon className="size-6 md:size-auto text-[rgb(168,168,168)]" />
                <span className="text-[rgb(168,168,168)] hidden md:block">
                  TAGGED
                </span>
              </div>
            </div>
            <div className="md:hidden">
              <Separator straight={true} />
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 px-5">
            <h1>Getting Started</h1>
            <HorizontalScroller duration={300}>
              <ul className="flex items-center gap-2">
                {items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex flex-col flex-shrink-0 items-center gap-4 border-[1px] border-[rgb(54,54,54)] p-4 w-64 h-60 rounded-md"
                    >
                      <Icon />
                      <p className="text-sm font-semibold">{item.heading}</p>
                      <p className="text-xs text-[rgb(168,168,168)]">
                        {item.caption}
                      </p>
                      <div className="flex justify-center w-full mt-auto">
                        <Button className="min-w-[152px]">{item.button}</Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </HorizontalScroller>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
