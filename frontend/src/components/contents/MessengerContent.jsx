import StoriesList from "components/lists/StoriesList";

export default function MessengerContent() {
  return (
    <>
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
    </>
  );
}
