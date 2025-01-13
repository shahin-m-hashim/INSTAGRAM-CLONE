import { cn } from "utils/cn";
import useStore from "store/_store";
import SaveIcon from "icons/SaveIcon";
import ReportIcon from "icons/ReportIcon";
import Separator from "components/Separator";
import { useShallow } from "zustand/shallow";
import SettingsIcon from "icons/SettingsIcon";
import ThemeSwitcher from "components/ThemeSwitcher";
import YourActivityIcon from "icons/YourActivityIcon";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import CurrentThemeImage from "components/CurrentThemeImage";

export default function MoreWidget() {
  const [showThemeSwitcher, setSecondaryWidget, setShowThemeSwitcher] =
    useStore(
      useShallow((state) => [
        state.showThemeSwitcher,
        state.setSecondaryWidget,
        state.setShowThemeSwitcher,
      ])
    );

  return (
    <div className="absolute z-50 pointer-events-auto left-4 bottom-20 rounded-2xl">
      <div className="flex w-[250px] overflow-hidden size-full rounded-2xl">
        <div
          className={cn(
            showThemeSwitcher ? "-translate-x-[255px]" : "translate-x-0",
            "transition-all duration-200 ease-in-out"
          )}
        >
          <div className="flex w-[250px] flex-shrink-0 flex-col bg-widget shadow-primary rounded-2xl">
            <div className="flex flex-col flex-1 gap-2 p-2">
              <TransitionLink
                to="/settings/edit_profile"
                className="flex items-center gap-4 px-1 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover"
              >
                <SettingsIcon className="w-10" />
                <span>Settings</span>
              </TransitionLink>

              <TransitionLink
                to="/your_activity"
                className="flex items-center gap-4 px-1 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover"
              >
                <YourActivityIcon className="w-10" />
                <span>Your Activity</span>
              </TransitionLink>

              <a className="flex items-center gap-4 px-1 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover">
                <SaveIcon className="w-10" />
                <span>Saved</span>
              </a>

              <button
                type="button"
                onClick={() => setShowThemeSwitcher(true)}
                className="flex items-center gap-4 px-3 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover"
              >
                <div className="w-8">
                  <CurrentThemeImage />
                </div>
                <span>Switch Appearance</span>
              </button>

              <button
                type="button"
                onClick={() => setSecondaryWidget("report")}
                className="flex items-center gap-4 px-1 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover"
              >
                <div className="w-10">
                  <ReportIcon className="ml-2 size-5" />
                </div>
                <span>Report a problem</span>
              </button>
            </div>

            <Separator straight={true} className="h-1.5" />

            <div className="p-2">
              <div className="px-3 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover">
                <button>Switch Accounts</button>
              </div>
            </div>

            <Separator straight={true} />

            <button
              type="button"
              className="p-2"
              onClick={() => setSecondaryWidget("logout")}
            >
              <div className="text-left b-t b-t-[rgb(38,38,38)] px-3 py-2 transition-all duration-100 ease-in rounded-md hover:bg-widget-hover">
                Log Out
              </div>
            </button>
          </div>
        </div>

        <div
          className={cn(
            showThemeSwitcher
              ? "-translate-x-[250px] translate-y-[245px]"
              : "translate-x-2",
            "flex w-[250px] rounded-2xl h-fit flex-shrink-0 bg-widget shadow-primary flex-col transition-all duration-200 ease-in-out"
          )}
        >
          <div className="flex items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-2">
              <button
                className="transform rotate-90"
                onClick={() => setShowThemeSwitcher(false)}
              >
                <DropDownArrowIcon className="size-3" />
              </button>
              <h1>Switch Appearance</h1>
            </div>
            <CurrentThemeImage />
          </div>

          <Separator straight={true} />

          <div className="flex items-center justify-between gap-4 p-5">
            <span>Dark Mode</span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
