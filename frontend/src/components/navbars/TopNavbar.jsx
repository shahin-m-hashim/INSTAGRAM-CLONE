import SearchField from "components/fields/SearchField";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import InstagramTextIcon from "icons/InstagramTextIcon";
import NotificationsIcon from "icons/NotificationsIcon";

export default function TopNavbar() {
  const url = "settings/notifications";

  return (
    <nav className="block md:hidden absolute inset-x-0 top-0 h-[60px] pointer-events-auto">
      <div className="size-full bg-black flex items-center gap-3 px-4 border-b border-b-[rgb(38,38,38,0.7)] text-[rgb(245,245,245)]">
        {url.includes("settings") ? (
          <>
            <div className="transform rotate-90">
              <DropDownArrowIcon className="size-6" />
            </div>

            <div className="flex justify-center flex-1">
              <h1 className="font-semibold">
                {url.includes("edit_profile")
                  ? "Edit profile"
                  : url.includes("notifications")
                  ? "Notifications"
                  : "Settings And privacy"}
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-2">
              <InstagramTextIcon />
              <button type="button">
                <DropDownArrowIcon />
              </button>
            </div>

            <div className="flex justify-end flex-1 h-full">
              <div className="flex items-center gap-3">
                <div className="h-8">
                  <SearchField />
                </div>

                <a className="items-center gap-4">
                  <NotificationsIcon />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
