import RadioInput from "components/RadioInput";
import ToggleSwitch from "components/ToggleSwitch";

export default function CommentsSettingsTab() {
  return (
    <div className="flex flex-col gap-10 p-4 max-w-[600px] my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Comments</h1>
      <div className="flex flex-col gap-6">
        <h1 className="text-sm font-semibold">Allow comments from</h1>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <RadioInput checked={true} />
            <span className="text-sm">Everyone</span>
          </div>

          <div className="flex items-center gap-4">
            <RadioInput />
            <div className="flex flex-col gap-1">
              <span className="text-sm">People You Follow</span>
              <p className="text-xs text-[rgb(168,168,168)]">0 People</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RadioInput />
            <div className="flex flex-col gap-1">
              <span className="text-sm">Your Followers</span>
              <p className="text-xs text-[rgb(168,168,168)]">1 Person</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RadioInput />
            <div className="flex flex-col gap-1">
              <span className="text-sm">
                People You Follow and Your Followers
              </span>
              <p className="text-xs text-[rgb(168,168,168)]">1 Person</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span>Allow GIF comments</span>
            <p className="text-xs text-[rgb(168,168,168)]">
              People will be able to comment GIFs on your posts and reels.
            </p>
          </div>
          <ToggleSwitch checked={true} />
        </div>
      </div>
    </div>
  );
}
