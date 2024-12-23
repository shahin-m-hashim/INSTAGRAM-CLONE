import StoriesList from "components/lists/StoriesList";

export default function MessengerContent() {
  return (
    <>
      <div className="px-4 my-5">
        <StoriesList />
      </div>

      <div className="flex items-center justify-between px-4">
        <div>
          <h1 className="font-bold">Messages</h1>
        </div>
        <div>
          <a className="text-sm font-semibold text-link-primary hover:text-link-primary-hover">
            Requests
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <p className="text-sm font-semibold text-tertiary">
          No messages found.
        </p>
      </div>
    </>
  );
}
