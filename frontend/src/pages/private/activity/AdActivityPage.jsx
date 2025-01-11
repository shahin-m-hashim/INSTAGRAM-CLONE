import Separator from "components/Separator";
import ActivityIcon from "icons/ActivityIcon";
import MobileAppIcon from "icons/MobileAppIcon";

export default function AdActivityPage() {
  return (
    <div className="flex flex-col flex-1 h-[500px] gap-4 py-6 overflow-auto px-4 md:px-14">
      <h1 className="hidden text-2xl font-bold md:block">Ad activity</h1>
      <p className="text-sm text-tertiary">
        See the ads you&apos;ve recently interacted with and learn more about
        the brands behind them.
      </p>
      <div className="flex items-center gap-4 p-4 border border-tertiary">
        <MobileAppIcon className="min-w-6" />
        <p className="text-sm">
          Use the mobile app for the full ad activity experience.
        </p>
      </div>

      <Separator straight={true} />

      <div className="flex flex-col gap-4 px-4 py-2">
        <h1 className="text-sm font-semibold">Recently Clicked Stories Ads</h1>
        <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
          <ActivityIcon />
          <h2 className="text-xl">No Recent Activity</h2>
          <p className="text-sm text-tertiary">
            You haven&apos;t interacted with any ads in the last 90 days.
          </p>
        </div>
      </div>

      <Separator straight={true} />

      <div className="flex flex-col gap-4 px-4 py-2">
        <h1 className="text-sm font-semibold">Recently Clicked Feed Ads</h1>
        <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
          <ActivityIcon />
          <h2 className="text-xl">No Recent Activity</h2>
          <p className="text-sm text-tertiary">
            You haven&apos;t interacted with any ads in the last 90 days.
          </p>
        </div>
      </div>
    </div>
  );
}
