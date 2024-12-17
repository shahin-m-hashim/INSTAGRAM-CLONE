import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function MessagesAndStoryRepliesSettingsPage() {
  return (
    <>
      <div className="hidden mb-5 md:block">
        <h1 className="text-xl font-bold">Messages and story replies</h1>
      </div>

      <h2 className="my-2 font-bold">How people can reach you</h2>
      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <TransitionLink
          to="message_controls"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm">Message Controls</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </TransitionLink>
        <TransitionLink
          to="story_replies"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm">Story Replies</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </TransitionLink>
      </div>

      <h2 className="my-2 font-bold">Who can see you&apos;re online</h2>
      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <TransitionLink
          to="show_activity_status"
          className="flex items-center justify-between gap-4"
        >
          <span className="text-sm">Show Activity Status</span>
          <div className="transform -rotate-90">
            <DropDownArrowIcon />
          </div>
        </TransitionLink>
      </div>
    </>
  );
}
