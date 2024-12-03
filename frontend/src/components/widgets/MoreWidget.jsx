import SavedIcon from "icons/SavedIcon";
import ReportIcon from "icons/ReportIcon";
import Separator from "components/Separator";
import SettingsIcon from "icons/SettingsIcon";
import YourActivityIcon from "icons/YourActivityIcon";
import SwitchAppearanceIcon from "icons/SwitchAppearanceIcon";

export default function MoreWidget() {
  return (
    <div className="absolute w-[250px] z-20 left-10 bottom-16 pointer-events-auto">
      <div className="flex size-full flex-col rounded-2xl bg-[rgb(38,38,38)] shadow-md text-[rgb(245,245,245)]">
        <div className="flex flex-col flex-1 gap-2 p-2">
          <a className="flex items-center gap-4 px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <SettingsIcon className="w-10" />
            <span>Settings</span>
          </a>
          <a className="flex items-center gap-4 px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <YourActivityIcon className="w-10" />
            <span>Your Activity</span>
          </a>
          <a className="flex items-center gap-4 px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <SavedIcon className="w-10" />
            <span>Saved</span>
          </a>
          <button className="flex items-center gap-4 px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <SwitchAppearanceIcon className="w-10" />
            <span>Switch Appearance</span>
          </button>
          <button className="flex items-center gap-4 px-2.5 py-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <ReportIcon className="w-10" />
            <span>Report a problem</span>
          </button>
        </div>

        <Separator color="bg-[rgb(58,58,58)]" straight={true} height=".25rem" />

        <div className="p-2">
          <div className="p-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <button>Switch Accounts</button>
          </div>
        </div>

        <Separator color="bg-[rgb(58,58,58)]" straight={true} />

        <div className="p-2">
          <div className="b-t b-t-[rgb(38,38,38)] p-3 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
            <button>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
