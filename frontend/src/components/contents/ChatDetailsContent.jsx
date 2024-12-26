import AccountsList from "components/lists/AccountsList";

export default function ChatDetailsContent() {
  return (
    <>
      <div className="items-center hidden w-full h-20 gap-4 px-4 border-b md:flex border-b-primary">
        <h1 className="text-xl font-semibold">Details</h1>
      </div>

      <div className="flex flex-col flex-1 w-full gap-2 md:overflow-hidden">
        <h1 className="p-4 pb-0 font-semibold">Members</h1>
        <div className="p-4 md:overflow-auto">
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
    </>
  );
}
