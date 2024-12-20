import Footer from "components/Footer";
import ToggleSwitch from "components/ToggleSwitch";
import GroupedOptions from "components/GroupedOptions";

export default function TagsAndMentionsSettingsPage() {
  return (
    <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
      <div className="flex flex-col w-full gap-10 md:mt-14">
        <div className="hidden md:block">
          <h1 className="text-xl font-bold">Tags and mentions</h1>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Who can tag you</h1>

          <p className="text-xs  text-tertiary ">
            Choose who can tag you in their photos and videos. When people try
            to tag you, they&apos;ll see if you don&apos;t allow tags from
            everyone.
          </p>

          <GroupedOptions
            options={[
              {
                title: "Allow tags from everyone",
              },
              {
                title: "Allow tags from people you follow",
              },
              {
                title: "Don't allow tags",
              },
            ]}
          />

          <div className="flex justify-between px-4 py-5 rounded-2xl border border-primary">
            <div className="flex flex-col gap-2">
              <span>Tag options</span>
              <p className="text-xs  text-tertiary">Manually approve tags</p>
            </div>
            <ToggleSwitch />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Who can @mention you</h1>
          <p className="text-xs  text-tertiary ">
            Choose who can @mention you to link your account in their stories,
            comments, live videos, and captions. When people try to @mention
            you, they&apos;ll see if you don&apos;t allow @mentions.
          </p>
          <GroupedOptions
            options={[
              {
                title: "Allow mentions from everyone",
              },
              {
                title: "Allow mentions from people you follow",
              },
              {
                title: "Don't allow mentions",
              },
            ]}
          />
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
