import Footer from "components/Footer";
import ToggleSwitch from "components/ToggleSwitch";
import GroupedOptions from "components/GroupedOptions";

export default function SharingAndReuseSettingsPage() {
  return (
    <div className="flex flex-col gap-10 p-4 max-w-[600px] w-full">
      <div className="flex flex-col w-full gap-10">
        <div className="hidden mt-14 md:block">
          <h1 className="text-xl font-bold">Sharing and reuse</h1>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">Allow people to share your content</h1>

          <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-tertiary">
            <div className="flex items-center justify-between">
              <span>Posts and reels to stories</span>
              <ToggleSwitch checked={true} />
            </div>

            <div className="flex items-center justify-between">
              <span>Stories in messages</span>
              <ToggleSwitch checked={true} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Who can create with your content</h1>

          <p className="text-xs  text-tertiary ">
            This controls who can create reels or stories that include your
            videos or photos and download them as part of their content.{" "}
            <a className="text-white hover:underline">Learn more</a>
          </p>

          <GroupedOptions
            options={[
              {
                title: "Everyone",
              },
              {
                title: "People You Follow",
                description: "0 People",
              },
              {
                title: "No one",
              },
            ]}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="mb-4 font-bold">Allow people to share externally</h1>

          <h2>Website embeds</h2>
          <p className="text-xs  text-tertiary ">
            When this is on, your public posts or profile can be shown outside
            of Instagram, including articles and blogs.{" "}
            <a className="text-white hover:underline">Learn more</a>
          </p>

          <GroupedOptions
            options={[
              {
                title: "On",
              },
              {
                title: "Off",
              },
            ]}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">
            Allow businesses to interact with you
          </h1>

          <div className="flex flex-col gap-2 px-4 py-5 rounded-2xl border border-tertiary">
            <h1>Featured content requests in shops</h1>
            <div className="flex items-center justify-between">
              <p className="text-xs  text-tertiary ">
                When this is on, business accounts can request to feature your
                photos and videos in their shops across Meta Company Products
                when you tag accounts with shops or use hashtags related to
                shops in your posts.&nbsp;
                <a className="text-white hover:underline">Learn more</a>
              </p>
              <ToggleSwitch checked={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
