import ToggleSwitch from "components/ToggleSwitch";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function ActivityStatusSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Activity Status</h1>
      </div>

      <div className="flex items-center justify-between">
        <span>Show activity status</span>
        <ToggleSwitch checked={true} />
      </div>

      <p className="text-xs  text-tertiary">
        Allow accounts you follow and anyone you message to see when you were
        last active or are currently active on Instagram. When this is turned
        off, you won&apos;t be able to see the activity status of other
        accounts. <span>Learn more</span>
      </p>
      <p className="text-xs  text-tertiary">
        You can continue to use our services if active status is off.
      </p>
    </>
  );
}
