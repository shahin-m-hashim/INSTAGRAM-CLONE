import { useState } from "react";
import ToggleSwitch from "components/ToggleSwitch";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import Button from "components/wrappers/Button";

const Tab = ({ setShowTab }) => (
  <>
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="transform rotate-90"
        onClick={() => setShowTab(false)}
      >
        <DropDownArrowIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold">Comment filtering</h1>
    </div>

    <div className="flex flex-col gap-6 h-[60%]">
      <h1>Keyword filters</h1>

      <p className="text-sm">
        Hide comments that contain any of the words or phrases you type above
        from your posts.
      </p>

      <form className="flex flex-col gap-2 size-full">
        <textarea
          placeholder="Add keywords separated by commas"
          className="size-full rounded-md bg-transparent p-2 border border-[rgb(38,38,38)] placeholder:text-[rgb(168,168,168)]"
        ></textarea>

        <Button className="w-20" type="submit" disabled={true}>
          Submit
        </Button>
      </form>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span>Hide Comments</span>
        <ToggleSwitch />
      </div>

      <p className="text-xs text-[rgb(168,168,168)]">
        Hide comments that contain commonly reported keywords from your posts.
      </p>
    </div>
  </>
);

export default function HiddenWordsSettingsTab() {
  const [showTab, setShowTab] = useState(false);

  return (
    <div className="flex flex-col gap-10 p-4 max-w-[600px] my-4 md:my-14 size-full">
      {showTab ? (
        <Tab setShowTab={setShowTab} />
      ) : (
        <>
          <h1 className="text-xl font-bold">Hidden Words</h1>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Offensive words and phrases</h2>
            <p className="text-xs text-[rgb(168,168,168)]">
              When these settings are on, Instagram automatically hides some
              comments and message requests.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span>Hide comments</span>
              <ToggleSwitch checked={true} />
            </div>

            <p className="text-xs text-[rgb(168,168,168)]">
              Instagram will automatically move a variety of comments, such as
              those that are potentially offensive or spam, to a separate
              section. Anyone can see these comments and you can unhide them
              anytime.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span>Advanced comment filtering</span>
              <ToggleSwitch />
            </div>

            <p className="text-xs text-[rgb(168,168,168)]">
              Even more comments that meet our criteria will automatically be
              hidden.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span>Hide message requests</span>
              <ToggleSwitch />
            </div>

            <p className="text-xs text-[rgb(168,168,168)]">
              Message requests that may be offensive will be moved to the hidden
              requests folder. We&apos;ll also filter notifications for these
              messages.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-bold">Custom words and phrases</h1>
            <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
              <button
                type="button"
                onClick={() => setShowTab(true)}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-sm">Manage custom words and phrases</span>
                <div className="transform -rotate-90">
                  <DropDownArrowIcon />
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
