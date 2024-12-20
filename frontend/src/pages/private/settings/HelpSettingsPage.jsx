import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function HelpSettingsPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="hidden mb-5 mt-14 md:block">
        <h1 className="text-xl font-bold">Help</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <span>Help Center</span>
        <div className="transform -rotate-90">
          <DropDownArrowIcon />
        </div>
      </div>

      <TransitionLink
        to="privacy_and_security"
        className="flex items-center justify-between gap-4"
      >
        <span>Privacy and Security</span>
        <div className="transform -rotate-90">
          <DropDownArrowIcon />
        </div>
      </TransitionLink>

      <TransitionLink
        to="support_requests"
        className="flex items-center justify-between gap-4"
      >
        <span>Support Requests</span>
        <div className="transform -rotate-90">
          <DropDownArrowIcon />
        </div>
      </TransitionLink>
    </div>
  );
}
