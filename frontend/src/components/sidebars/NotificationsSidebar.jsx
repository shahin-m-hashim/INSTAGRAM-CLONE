import SearchField from "components/fields/SearchField";
import CircledNotificationsIcon from "icons/CircledNotificationsIcon";
import SuggestedAccountsList from "components/lists/SuggestedAccountsList";

export default function NotificationsSidebar() {
  return (
    <div className="fixed inset-y-0 w-[400px] left-[80px] pointer-events-auto">
      <div className="flex flex-col p-5 text-white overflow-y-auto bg-black size-full border-r border-r-[rgb(54,54,54,0.7)]">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        <div className="flex flex-col w-full gap-4 px-5 my-5">
          <div className="flex items-center justify-center w-full">
            <CircledNotificationsIcon />
          </div>

          <div className="flex items-center justify-center w-full">
            <h2>Activity On Your Posts</h2>
          </div>

          <div className="flex items-center justify-center w-full text-center">
            <p className="text-sm">
              When someone likes or comments on one of your posts, you&apos;ll
              see it here.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-5 mt-5">
          <div>
            <h1>Suggested For you</h1>
          </div>
          <div>
            <SuggestedAccountsList />
          </div>
        </div>
      </div>
    </div>
  );
}
