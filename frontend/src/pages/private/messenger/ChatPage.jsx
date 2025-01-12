import IIcon from "icons/IIcon";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePicture from "components/ProfilePicture";
import TransitionLink from "components/TransitionLink";
import MessageField from "components/fields/MessageField";
import ChatDetailsContent from "components/contents/ChatDetailsContent";

export default function ChatPage() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative flex w-full">
      <div className="flex flex-1 flex-col items-center justify-center md:h-screen h-[calc(100vh-60px)]">
        <div className="items-center justify-between hidden w-full h-20 px-6 border-b md:flex border-b-tertiary">
          <div className="flex items-center gap-4">
            <ProfilePicture
              storyPadding="0px"
              className="size-12"
              id="chat-profile-pic-1"
            />
            <span>Username</span>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setShowDetails((prev) => !prev)}
              type="button"
            >
              <IIcon isActive={showDetails} className="size-6" />
            </button>
          </div>

          <div className="md:hidden">
            <TransitionLink to={`/direct/${id}/details`}>
              <IIcon isActive={showDetails} className="size-6" />
            </TransitionLink>
          </div>
        </div>

        <div className="flex justify-center flex-1 w-full">
          <div className="flex flex-col items-center gap-4 py-10">
            <ProfilePicture
              storyPadding="0px"
              className="size-24"
              id="chat-profile-pic-2"
            />
            <div className="flex flex-col text-center">
              <span>Full Name</span>
              <span>username . Instagram</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 p-4 text-center border-t border-t-tertiary">
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
        <div className="flex items-end flex-col bg-primary lg:w-[320px] w-full md:h-screen h-[calc(100vh-60px)] border-l border-l-tertiary">
          <ChatDetailsContent />
        </div>
      )}
    </div>
  );
}
