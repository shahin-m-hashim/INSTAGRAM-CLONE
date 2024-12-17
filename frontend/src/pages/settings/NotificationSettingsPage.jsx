import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function NotificationSettingsPage() {
  return (
    <>
      <div className="hidden px-4 mb-5 md:block">
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <TransitionLink
          to="push"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm">Push Notifications</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </TransitionLink>

        <TransitionLink
          to="email"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm">Email Notifications</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </TransitionLink>
      </div>
    </>
  );
}
