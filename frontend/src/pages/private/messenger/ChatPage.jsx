import { cn } from "utils/cn";
import IIcon from "icons/IIcon";
import { useState } from "react";
import BackArrowIcon from "icons/BackArrowIcon";
import ProfilePicture from "components/ProfilePicture";
import AccountsList from "components/lists/AccountsList";
import MessageField from "components/fields/MessageField";

export default function ChatPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative flex w-full">
      <div
        className={cn(
          showDetails ? "lg:pr-[320px]" : "",
          "flex flex-1 flex-col pr-0 items-center justify-center md:h-screen h-[calc(100vh-60px)]"
        )}
      >
        <div className="items-center justify-between hidden w-full h-20 px-6 border-b md:flex border-b-primary">
          <div className="flex items-center gap-4">
            <ProfilePicture storyPadding="0px" className="size-12" />
            <span>Username</span>
          </div>
          <button onClick={() => setShowDetails((prev) => !prev)} type="button">
            <IIcon isActive={showDetails} className="size-6" />
          </button>
        </div>

        <div className="flex justify-center flex-1 w-full">
          <div className="flex flex-col items-center gap-4 py-10">
            <ProfilePicture className="size-24" storyPadding="0px" />
            <div className="flex flex-col text-center">
              <span>Full Name</span>
              <span>username . Instagram</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 p-4 text-center border-t border-t-primary">
          <div className="flex flex-col w-full gap-1">
            <p className="font-semibold ">
              Invite Full Name {"("}username{")"} to chat
            </p>
            <p className="text-xs text-tertiary">
              You can only send one message in this invite. Remember to follow
              our{" "}
              <a className="text-link-secondary hover:text-link-secondary-hover">
                Community Standards
              </a>{" "}
              and be respectful when messaging others for the first time.
            </p>
          </div>

          <div className="flex items-center w-full">
            <MessageField />
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="absolute inset-x-0 inset-y-0 z-10 lg:right-0 lg:inset-x-auto">
          <div className="flex items-end flex-col bg-primary lg:w-[320px] w-full md:h-screen h-[calc(100vh-60px)] border-l border-l-primary">
            <div className="items-center hidden w-full h-20 gap-4 px-4 border-b md:flex border-b-primary">
              <button
                type="button"
                className="lg:hidden"
                onClick={() => setShowDetails(false)}
              >
                <BackArrowIcon />
              </button>
              <h1 className="text-xl font-semibold">Details</h1>
            </div>

            <div className="flex flex-col flex-1 w-full gap-2 overflow-hidden">
              <h1 className="p-4 pb-0 font-semibold">Members</h1>
              <div className="p-4 overflow-auto">
                {/* <div className="flex items-center gap-4">
              <ProfilePicture storyPadding="0px" />
              <div className="flex flex-col">
                <span className="font-semibold">username</span>
                <span className="text-tertiary">Full Name</span>
              </div>
            </div> */}
                <AccountsList />
              </div>
            </div>

            <div className="flex flex-col items-start w-full h-24 gap-4 p-4 border-t border-t-primary">
              <button type="button" className="text-red-500">
                Block
              </button>
              <button type="button" className="text-red-500">
                Delete chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
