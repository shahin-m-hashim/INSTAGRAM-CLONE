import NewMessageIcon from "icons/NewMessageIcon";

export default function MessengerSidebar() {
  return (
    <div className="fixed inset-y-0 w-[400px] left-[80px] pointer-events-auto">
      <div className="flex flex-col text-white bg-black p-5 gap-5 size-full border-r border-r-[rgb(54,54,54,0.7)]">
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">Username</h1>
          </div>
          <div className="flex items-center justify-center">
            <NewMessageIcon />
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-center">
            <img
              className="rounded-full size-20"
              src="images/default_dp_dark.webp"
              alt="dp"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold">Messages</h1>
          </div>
          <div>
            <a className="text-[rgb(168,168,168)] text-sm font-semibold">
              Requests
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full overflow-auto">
          <p className="text-sm font-semibold text-[rgb(168,168,168)]">
            No messages found.
          </p>
        </div>
      </div>
    </div>
  );
}
