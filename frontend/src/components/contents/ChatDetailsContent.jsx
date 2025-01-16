import Accounts from "components/lists/Accounts";
import NavigateBackBtn from "components/NavigateBackBtn";
import ProfilePicture from "components/ProfilePicture";

export default function ChatDetailsContent() {
  return (
    <>
      <div className="items-center hidden w-full h-20 gap-4 px-4 border-b md:text-center lg:text-start md:flex border-b-tertiary">
        <div className="mt-2 lg:hidden">
          <NavigateBackBtn type="extended" />
        </div>

        <h1 className="flex-1 text-xl font-semibold md:mr-4 lg:mr-0">
          Details
        </h1>
      </div>

      <div className="flex flex-col flex-1 w-full gap-2 md:overflow-hidden">
        <h1 className="p-4 pb-0 font-semibold">Members</h1>
        <div className="p-4 md:overflow-auto">
          <div className="flex items-center gap-2 mb-4">
            <ProfilePicture
              storyPadding="0px"
              id="chat-profile-pic"
              className="size-[50px]"
            />
            <div className="flex flex-col">
              <span className="font-semibold">username</span>
              <span className="text-tertiary">Full Name</span>
            </div>
          </div>
          <Accounts />
        </div>
      </div>

      <div className="flex flex-col items-start w-full h-24 gap-4 p-4 border-t border-t-tertiary">
        <button type="button" className="text-red-500">
          Block
        </button>
        <button type="button" className="text-red-500">
          Delete chat
        </button>
      </div>
    </>
  );
}
