import { useState } from "react";
import RadioInput from "components/RadioInput";
import ToggleSwitch from "components/ToggleSwitch";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

const StoryRepliesTab = ({ setActiveTab }) => (
  <>
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="transform rotate-90"
        onClick={() => setActiveTab(null)}
      >
        <DropDownArrowIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold">Story replies</h1>
    </div>
    <h2 className="-mb-3 font-bold">Who can reply to your stories</h2>
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <RadioInput checked={true} />
        <label className="text-sm">Everyone</label>
      </div>
      <div className="flex items-center gap-4">
        <RadioInput />
        <label className="text-sm">People you follow</label>
      </div>
      <div className="flex items-center gap-4">
        <RadioInput />
        <label className="text-sm">Off</label>
      </div>
    </div>
  </>
);

const MessageControlsTab = ({ setActiveTab }) => (
  <>
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="transform rotate-90"
        onClick={() => setActiveTab(null)}
      >
        <DropDownArrowIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold">Message controls</h1>
    </div>
    <p className="text-xs text-[rgb(168,168,168)] w-9/12">
      People you follow or have chatted with before can always message you
      unless you block them. When anyone else sends you a message, you can
      receive it as a message request that you can accept or delete.
    </p>
    <a className="text-xs text-white hover:underline">
      Learn more about who can message you
    </a>

    <div className="flex flex-col gap-2">
      <h1>Your followers on Instagram</h1>
      <p className="text-xs text-[rgb(168,168,168)] ">
        Message requests from people who follow you on Instagram will be
        delivered to your Message requests folder unless you choose not to
        receive them.
      </p>
      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <div className="flex items-center justify-between">
          <label>Message Requests</label>
          <RadioInput className="size-5" checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <label>Don&apos;t Receive Requests</label>
          <RadioInput className="size-5" />
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <h1>Others on Instagram</h1>
      <p className="text-xs text-[rgb(168,168,168)]">
        Message requests from other accounts on Instagram will be delivered to
        your Message requests folder unless you choose not to receive them.
      </p>
      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <div className="flex items-center justify-between">
          <label>Message Requests</label>
          <RadioInput className="size-5" checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <label>Don&apos;t Receive Requests</label>
          <RadioInput className="size-5" />
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <h1>Who can add you to group chats</h1>

      <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <label>Everyone on Instagram</label>
            <p className="text-xs text-[rgb(168,168,168)]">
              You can be added to group chats by everyone,except people
              you&apos;ve blocked.
            </p>
          </div>
          <RadioInput className="size-5" checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <label>Only people you follow on Instagram</label>
            <p className="text-xs text-[rgb(168,168,168)]">
              People you follow or have messaged before can add you to group
              chats.
            </p>
          </div>
          <RadioInput className="size-5" checked={true} />
        </div>
      </div>
    </div>
  </>
);

const ShowActivityStatusTab = ({ setActiveTab }) => (
  <>
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="transform rotate-90"
        onClick={() => setActiveTab(null)}
      >
        <DropDownArrowIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold">Activity Status</h1>
    </div>

    <div className="flex items-center justify-between">
      <span>Show activity status</span>
      <ToggleSwitch checked={true} />
    </div>

    <p className="text-xs text-[rgb(168,168,168)] -mt-4">
      Allow accounts you follow and anyone you message to see when you were last
      active or are currently active on Instagram. When this is turned off, you
      won&apos;t be able to see the activity status of other accounts.{" "}
      <span>Learn more</span>
    </p>
    <p className="text-xs text-[rgb(168,168,168)] -mt-6">
      You can continue to use our services if active status is off.
    </p>
  </>
);

export default function MessagesAndStoryRepliesSettingsTab() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      {activeTab ? (
        <div className="flex flex-col gap-10 max-w-[650px] p-4 my-4 md:my-14 size-full">
          {activeTab === "storyReplies" ? (
            <StoryRepliesTab setActiveTab={setActiveTab} />
          ) : activeTab === "messageControls" ? (
            <MessageControlsTab setActiveTab={setActiveTab} />
          ) : (
            <ShowActivityStatusTab setActiveTab={setActiveTab} />
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-4 max-w-[600px] my-4 md:my-14 size-full">
          <h1 className="text-xl font-bold">Messages and story replies</h1>

          <h2 className="my-2 font-bold">How people can reach you</h2>
          <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
            <button
              type="button"
              onClick={() => setActiveTab("messageControls")}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-sm">Message Controls</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("storyReplies")}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-sm">Story Replies</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>
          </div>

          <h2 className="my-2 font-bold">Who can see you&apos;re online</h2>
          <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
            <button
              type="button"
              onClick={() => setActiveTab("showActivityStatus")}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-sm">Show Activity Status</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
