import Accounts from "components/lists/Accounts";
import CircledNotificationsIcon from "icons/CircledNotificationsIcon";

export default function NotificationsContent() {
  return (
    <>
      <div className="flex flex-col w-full gap-4 px-5 my-5">
        <div className="flex items-center justify-center w-full">
          <CircledNotificationsIcon />
        </div>

        <div className="flex items-center justify-center w-full">
          <h2 className="text-sm">Activity On Your Posts</h2>
        </div>

        <div className="flex items-center justify-center w-full text-center">
          <p className="text-sm">
            When someone likes or comments on one of your posts, you&apos;ll see
            it here.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-5 my-5">
        <h1>Suggested For you</h1>

        <Accounts type="notifications" />
      </div>
    </>
  );
}
