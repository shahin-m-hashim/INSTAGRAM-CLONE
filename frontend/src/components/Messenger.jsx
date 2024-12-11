import BackArrowIcon from "icons/BackArrowIcon";
import NewMessageIcon from "icons/NewMessageIcon";
import StoriesList from "components/lists/StoriesList";

export default function Messenger() {
  return (
    <div className="flex h-full md:w-[320px] lg:w-[420px] flex-col gap-3 md:border-r md:border-r-[rgb(54,54,54,0.7)]">
      <div className="flex items-center p-4 justify-between md:hidden border-b border-b-[rgb(54,54,54,0.7)]">
        <button type="button">
          <BackArrowIcon />
        </button>
        <h1 className="font-bold">Username</h1>
        <NewMessageIcon />
      </div>

      <div className="px-4 md:py-6">
        <StoriesList showOwnStory={true} />
      </div>

      <div className="flex items-center justify-between px-4">
        <div>
          <h1 className="font-bold">Messages</h1>
        </div>
        <div>
          <a className="text-[rgb(168,168,168)] text-sm font-semibold">
            Requests
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <p className="text-sm font-semibold text-[rgb(168,168,168)]">
          No messages found.
        </p>
      </div>
    </div>
  );
}
