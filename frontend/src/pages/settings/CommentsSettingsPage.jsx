import Footer from "components/Footer";
import ToggleSwitch from "components/ToggleSwitch";
import GroupedOptions from "components/GroupedOptions";

export default function CommentsSettingsPage() {
  return (
    <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
      <div className="flex flex-col w-full gap-10">
        <div className="hidden mt-10 md:block">
          <h1 className="text-xl font-bold">Comments</h1>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-sm font-semibold">Allow comments from</h1>

          <GroupedOptions
            type="simple-borderless"
            options={[
              {
                title: "Everyone",
              },
              {
                title: "People You Follow",
                description: "0 People",
              },
              {
                title: "Your Followers",
                description: "1 Person",
              },
              {
                title: "People You Follow and Your Followers",
                description: "1 Person",
              },
            ]}
          />

          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <span>Allow GIF comments</span>
              <p className="text-xs  text-secondary">
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
