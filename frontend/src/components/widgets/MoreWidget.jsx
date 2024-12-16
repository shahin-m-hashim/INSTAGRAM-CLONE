import { cn } from "utils/cn";
import SaveIcon from "icons/SaveIcon";
import ReportIcon from "icons/ReportIcon";
import { useContext, useState } from "react";
import Separator from "components/Separator";
import SettingsIcon from "icons/SettingsIcon";
import ToggleSwitch from "components/ToggleSwitch";
import GlobalContext from "providers/GlobalProvider";
import YourActivityIcon from "icons/YourActivityIcon";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function MoreWidget() {
  const [showTab, setShowTab] = useState(false);
  const { setActiveWidget } = useContext(GlobalContext);

  return (
    <div className="absolute w-[250px] z-10 left-4 bottom-20 pointer-events-auto">
      <div className="flex w-full overflow-hidden">
        <div
          className={cn(
            showTab ? "-translate-x-[250px]" : "translate-x-0",
            "flex w-[250px] flex-shrink-0 flex-col transition-all duration-200 rounded-2xl bg-[rgb(38,38,38)] shadow-md text-[rgb(245,245,245)] ease-in-out"
          )}
        >
          <div className="flex flex-col flex-1 gap-2 p-2">
            <TransitionLink
              to="/settings/edit_profile"
              className="flex items-center gap-4 px-1 py-2  transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]"
            >
              <SettingsIcon className="w-10" />
              <span>Settings</span>
            </TransitionLink>

            <TransitionLink
              to="/your_activity"
              className="flex items-center gap-4 px-1 py-2  transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]"
            >
              <YourActivityIcon className="w-10" />
              <span>Your Activity</span>
            </TransitionLink>

            <a className="flex items-center gap-4 px-1 py-2  transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
              <SaveIcon className="w-10" />
              <span>Saved</span>
            </a>
            <button
              onClick={() => setShowTab(true)}
              className="flex items-center gap-4 px-3 py-2 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]"
            >
              <img src="icons/moon.svg" alt="dark-theme" />
              <span>Switch Appearance</span>
            </button>
            <button
              onClick={() => setActiveWidget("report")}
              className="flex items-center gap-4 px-1 py-2  transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]"
            >
              <ReportIcon className="w-10" />
              <span>Report a problem</span>
            </button>
          </div>

          <Separator straight={true} className="bg-[rgb(58,58,58)] h-1.5" />

          <div className="p-2">
            <div className="px-3 py-2 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
              <button>Switch Accounts</button>
            </div>
          </div>

          <Separator className="bg-[rgb(58,58,58)]" straight={true} />

          <div className="p-2">
            <div className="b-t b-t-[rgb(38,38,38)] px-3 py-2 transition-all duration-100 ease-in rounded-md hover:bg-[rgb(58,58,58)]">
              <button>Log Out</button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            showTab
              ? "-translate-x-[250px] translate-y-[250px]"
              : "translate-x-0",
            "flex w-[250px] rounded-2xl h-fit bg-[rgb(38,38,38)] shadow-md text-[rgb(245,245,245)] flex-shrink-0 flex-col transition-all duration-200 ease-in-out"
          )}
        >
          <div className="flex items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTab(false)}
                className="transform rotate-90"
              >
                <DropDownArrowIcon className="size-3" />
              </button>
              <h1>Switch Appearance</h1>
            </div>
            <img src="icons/moon.svg" alt="dark-theme" />
          </div>

          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <div className="flex items-center justify-between gap-4 p-5">
            <span>Dark Mode</span>
            <ToggleSwitch
              checked={true}
              pillClassName="h-5 w-10"
              ballClassName="size-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
