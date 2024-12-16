import Footer from "components/Footer";
import RadioInput from "components/RadioInput";
import ToggleSwitch from "components/ToggleSwitch";

export default function TagsAndMentionsSettingsPage() {
  return (
    <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
      <div className="flex flex-col w-full gap-10">
        <div className="hidden mt-14 md:block">
          <h1 className="text-xl font-bold">Tags and mentions</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1>Who can tag you</h1>

          <p className="text-xs text-[rgb(168,168,168)] ">
            Choose who can tag you in their photos and videos. When people try
            to tag you, they&apos;ll see if you don&apos;t allow tags from
            everyone.
          </p>

          <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
            <div className="flex items-center justify-between">
              <span>Allow tags from everyone</span>
              <RadioInput className="size-5" checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <span>Allow tags from people you follow</span>
              <RadioInput className="size-5" />
            </div>
            <div className="flex items-center justify-between">
              <span>Don&apos;t allow tags</span>
              <RadioInput className="size-5" />
            </div>
          </div>

          <div className="flex justify-between px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
            <div className="flex flex-col gap-2">
              <span>Tag options</span>
              <p className="text-xs text-[rgb(168,168,168)]">
                Manually approve tags
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1>Who can @mention you</h1>
          <p className="text-xs text-[rgb(168,168,168)] ">
            Choose who can @mention you to link your account in their stories,
            comments, live videos, and captions. When people try to @mention
            you, they&apos;ll see if you don&apos;t allow @mentions.
          </p>
          <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
            <div className="flex items-center justify-between">
              <span>Allow mentions from everyone</span>
              <RadioInput className="size-5" checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <span>Allow mentions from people you follow</span>
              <RadioInput className="size-5" />
            </div>
            <div className="flex items-center justify-between">
              <span>Don&apos;t allow mentions</span>
              <RadioInput className="size-5" />
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
