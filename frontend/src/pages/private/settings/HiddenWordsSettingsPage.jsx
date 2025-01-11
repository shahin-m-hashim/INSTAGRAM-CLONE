import ToggleSwitch from "components/ToggleSwitch";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function HiddenWordsSettingsPage() {
  return (
    <>
      <div className="hidden mt-14 md:block">
        <h1 className="text-xl font-bold">Hidden Words</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Offensive words and phrases</h2>
        <p className="text-xs  text-tertiary">
          When these settings are on, Instagram automatically hides some
          comments and message requests.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span>Hide comments</span>
          <ToggleSwitch checked={true} />
        </div>

        <p className="text-xs  text-tertiary">
          Instagram will automatically move a variety of comments, such as those
          that are potentially offensive or spam, to a separate section. Anyone
          can see these comments and you can unhide them anytime.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span>Advanced comment filtering</span>
          <ToggleSwitch />
        </div>

        <p className="text-xs  text-tertiary">
          Even more comments that meet our criteria will automatically be
          hidden.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>Hide message requests</span>
          <ToggleSwitch />
        </div>

        <p className="text-xs  text-tertiary">
          Message requests that may be offensive will be moved to the hidden
          requests folder. We&apos;ll also filter notifications for these
          messages.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-bold">Custom words and phrases</h1>
        <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-tertiary">
          <TransitionLink
            to="manage_custom_words"
            className="flex items-center justify-between gap-4"
          >
            <span className="text-sm">Manage custom words and phrases</span>
            <div className="transform -rotate-90">
              <DropDownArrowIcon />
            </div>
          </TransitionLink>
        </div>
      </div>
    </>
  );
}
