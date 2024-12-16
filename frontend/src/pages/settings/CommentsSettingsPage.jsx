import Footer from "components/Footer";
import RadioInput from "components/RadioInput";
import ToggleSwitch from "components/ToggleSwitch";

export default function CommentsSettingsPage() {
  return (
    <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
      <div className="flex flex-col w-full gap-10">
        <div className="hidden mt-10 md:block">
          <h1 className="text-xl font-bold">Comments</h1>
        </div>

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

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
