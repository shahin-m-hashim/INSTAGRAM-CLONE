import PostsIcon from "icons/PostsIcon";
import SavedIcon from "icons/SavedIcon";
import TaggedIcon from "icons/TaggedIcon";
import Separator from "components/Separator";
import SettingsIcon from "icons/SettingsIcon";
import HomeLayout from "components/wrappers/HomeLayout";
import HorizontalScroller from "components/wrappers/HorizontalScroller";
import SharePhotosIcon from "icons/SharePhotosIcon";

const items = [
  {
    image: "SharePhotosIcon",
    heading: "Share Photos",
    caption: "When you share photos, they will appear on your profile.",
    button: "Share your first photo",
  },
  {
    image: "AddPhoneNoIcon",
    heading: "Add Phone Number",
    caption:
      "Add your phone number so you can reset your password, find friends and more.",
    button: "Add Phone Number",
  },
  {
    image: "CompleteProfileIcon",
    heading: "Complete Profile",
    caption: "Add your name and bio so friends can find you.",
    button: "Edit Profile",
  },
  {
    image: "AddProfilePhotoIcon",
    heading: "Add Profile Photo",
    caption: "Add a profile photo so friends can recognize you.",
    button: "Add Profile Photo",
  },
];

export default function ProfilePage() {
  return (
    <HomeLayout>
      <div className="flex items-center min-h-screen px-4 xl:px-36">
        <div className="flex flex-col py-16 size-full">
          <div className="flex flex-col w-full md:px-6 gap-14">
            <div className="flex justify-start flex-1 lg:px-8">
              <div className="flex flex-1 gap-10 lg:gap-20">
                <div className="relative flex items-center justify-center">
                  <img
                    alt="profile pic"
                    src="images/default_dp.webp"
                    className="rounded-full size-36"
                  />

                  <div className="absolute inset-0 z-10">
                    <div className="bg-[rgb(85,85,85)] rounded-full opacity-70 size-full"></div>
                  </div>

                  <div className="absolute inset-0 z-20">
                    <div className="flex items-center justify-center size-full">
                      <img src="icons/camera.svg" alt="camera" />
                    </div>
                  </div>

                  <div className="absolute z-20 -top-8 left-8">
                    <div className="bg-[rgb(54,54,54)] text-[rgb(168,168,168)] text-xs px-2 py-3 rounded-lg flex items-center justify-center">
                      Note ...
                      <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[rgb(68,68,68)]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center w-full gap-2">
                    <div className="flex items-center justify-center h-full gap-2 mr-2 text-xl">
                      <span>Username</span>
                    </div>

                    <div className="flex items-center justify-center h-full">
                      <button className="px-3 font-semibold py-1 text-sm text-white bg-[rgb(54,54,54)] rounded-md">
                        Edit Profile
                      </button>
                    </div>
                    <div className="flex items-center justify-center h-full">
                      <button className="px-3 font-semibold py-1 text-sm text-white bg-[rgb(54,54,54)] rounded-md">
                        View Archive
                      </button>
                    </div>

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

            <div className="flex flex-1 gap-2 px-5 lg:px-0">
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

          <div className="relative flex flex-col w-full my-14">
            <Separator straight={true} />
            <div className="absolute inset-x-0 top-5">
              <div className="flex px-4 text-sm font-semibold justify-evenly md:justify-center gap-14 size-full">
                <div className="relative flex items-center gap-2">
                  <div className="absolute inset-0 -top-5 h-[1px] bg-white"></div>
                  <PostsIcon className="size-6 md:size-auto" />
                  <span className="text-[rgb(245,245,245)] hidden md:block">
                    POSTS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <SavedIcon className="size-6 md:size-auto text-[rgb(168,168,168)]" />
                  <span className="text-[rgb(168,168,168)] hidden md:block">
                    SAVED
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TaggedIcon className="size-6 md:size-auto text-[rgb(168,168,168)]" />
                  <span className="text-[rgb(168,168,168)] hidden md:block">
                    TAGGED
                  </span>
                </div>
              </div>
              <div className="block mt-4 size-full md:hidden">
                <Separator straight={true} />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 px-5">
            <h1>Getting Started</h1>
            <HorizontalScroller duration={200}>
              <ul className="flex items-center gap-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col flex-shrink-0 items-center gap-4 border-[1px] border-[rgb(54,54,54)] p-3 w-64 h-60 rounded-md"
                  >
                    <SharePhotosIcon />
                    <p className="text-sm font-semibold">{item.heading}</p>
                    <p className="text-xs text-[rgb(168,168,168)]">
                      {item.caption}
                    </p>
                    <button className="px-4 mt-auto font-semibold py-2 text-sm text-white bg-[rgb(0,149,246)] rounded-md">
                      {item.button}
                    </button>
                  </li>
                ))}
              </ul>
            </HorizontalScroller>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
