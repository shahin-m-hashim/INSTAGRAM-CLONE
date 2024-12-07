import DropDownArrowIcon from "icons/DropDownArrowIcon";

const PushNotificationSettings = () => {};
const EmailNotificationSettings = () => {};

export default function NotificationSettingsTab() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[600px] my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Notifications</h1>
      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm">Push Notifications</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm">Email Notifications</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
