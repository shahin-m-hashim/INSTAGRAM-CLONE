import { useState } from "react";
import toCamelCase from "utils/casing";
import settings from "mocks/settings.json";
import Separator from "components/Separator";
import RadioInput from "components/RadioInput";
import ToggleSwitch from "components/ToggleSwitch";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import Footer from "components/Footer";

const pushOptions = [
  {
    type: "triple",
    heading: "Likes",
    example: "johnappleseed liked your photo.",
  },
  {
    type: "triple",
    heading: "Likes and comments on photos of you",
    example: "johnappleseed commented on a post you're tagged in.",
  },
  {
    heading: "Comments",
    type: "triple",
    example: `johnappleseed commented: "Nice shot!"`,
  },
  {
    heading: "Comment likes",
    type: "double",
    example: `johnappleseed liked your comment: Nice shot!`,
  },
  {
    heading: "Comment daily digest",
    type: "triple",
    example: `johnappleseed recently commented on this post: Nice shot!`,
  },
  {
    heading: "First posts and stories",
    type: "triple",
    example: `See johnappleseed's first story on Instagram, and other similar notifications.`,
  },
  {
    heading: "Notes",
    type: "double",
    example: `johnappleseed, janeappleseed and 3 others shared notes.`,
  },
  {
    heading: "Add to post submissions",
    type: "double",
    example: `johnappleseed and 3 others want to add to your post. Review their submissions.`,
  },
  {
    heading: "Added to post",
    type: "double",
    example: `johnappleseed added your photo to their post.`,
  },
  {
    heading: "Mention requests",
    type: "triple",
    example: `johnappleseed requested to be mentioned in your story.`,
  },
  {
    heading: "New followers",
    type: "double",
    example: `John Appleseed (johnappleseed) started following you.`,
  },
  {
    heading: "Accepted follow requests",
    type: "double",
    example: `John Appleseed (johnappleseed) accepted your follow request.`,
  },
  {
    heading: "Account suggestions",
    type: "double",
    example: `johnappleseed, who you might know, is on Instagram, and other similar notifications.`,
  },
  {
    heading: "Mentions in bio",
    type: "triple",
    example: `johnappleseed mentioned you in their bio.`,
  },
  {
    heading: "Message requests",
    type: "double",
    example: `johnappleseed wants to send you a message.`,
  },
  {
    heading: "Messages from individual and group chats",
    type: "double",
    example: "johnappleseed sent you a message.",
  },
  {
    heading: "Message reminders",
    type: "double",
    example: `johnappleseed sent you a message (1d ago).`,
  },
  {
    heading: "Group requests",
    type: "double",
    example: `johnappleseed wants to add janeappleseed to your group.`,
  },
  {
    heading: `Broadcast channel invites`,
    type: "double",
    example: `johnappleseed invited you to join their broadcast channel: Hello World!`,
  },
  {
    heading: "Broadcast channel messages",
    type: "double",
    example: "johnappleseed sent you a message.",
  },
  {
    heading: "Social channel messages",
    type: "double",
    example: "johnappleseed sent you a message.",
  },
  {
    heading: "Original audio",
    type: "double",
    example: "johnappleseed created a reel with your audio.",
  },
  {
    heading: "Remixes",
    type: "double",
    example: "johnappleseed remixed your reel.",
  },
  {
    heading: "Live videos",
    type: "double",
    example: "johnappleseed started a live video.",
  },
  {
    heading: "Recently uploaded reels",
    type: "double",
    example: "johnappleseed, johndoe and janedoe recently shared new reels.",
  },
  {
    heading: "Most watched reels",
    type: "double",
    example: "Check out the most watched reels in your location today.",
  },
  {
    heading: "Add Yours",
    type: "double",
    example: "johnappleseed started an Add Yours prompt.",
  },
  {
    heading: "Reels made for you",
    type: "double",
    example: "See new reels made for you.",
  },
  {
    heading: "Your fundraisers",
    type: "double",
    example: "johnappleseed donated to your fundraiser.",
  },
  {
    heading: "Fundraisers by others",
    type: "double",
    example: "johnappleseed started a fundraiser.",
  },
  {
    heading: "Reminders",
    type: "double",
    example: "You have unseen notifications, and other similar notifications.",
  },
  {
    heading: "Product announcements & feedback",
    type: "double",
    example: "Download Boomerang, Instagram's latest app.",
  },
  {
    heading: "Support requests",
    type: "double",
    example: "Your support request from July 10 was just updated.",
  },
  {
    heading: "Trending places",
    type: "double",
    example:
      "John Appleseed Park is a trending place near you. See what's being shared.",
  },
  {
    heading: "Birthdays",
    type: "double",
    example: "johnappleseed has a birthday today!",
  },
];

const emailOptions = [
  {
    type: "double",
    heading: "Feedback emails",
    example: "Give feedback on Instagram.",
  },
  {
    type: "double",
    heading: "Reminder emails",
    example: "Get notifications you may have missed.",
  },
  {
    type: "double",
    heading: "Product emails",
    example: "et tips and resources about Instagram's tools.",
  },
  {
    type: "double",
    heading: "News emails",
    example: "Learn about new Instagram features.",
  },
  {
    type: "double",
    heading: "Support emails",
    example:
      "Get updates on reports and violations of our Community Standards.",
  },
];

const Options = ({ defaultValues, options }) => (
  <ul className="flex flex-col gap-4">
    {options.map((option, idx) => (
      <li key={idx} className="flex flex-col gap-6">
        <h1 className="font-bold">{option.heading}</h1>

        {option.type === "double" ? (
          <>
            <div className="flex items-center gap-4">
              <RadioInput
                isChecked={defaultValues[toCamelCase(option.heading)] === "On"}
              />
              <label className="text-sm">On</label>
            </div>
            <div className="flex items-center gap-4">
              <RadioInput
                isChecked={defaultValues[toCamelCase(option.heading)] === "Off"}
              />
              <label className="text-sm">Off</label>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <RadioInput
                isChecked={defaultValues[toCamelCase(option.heading)] === "Off"}
              />
              <label className="text-sm">Off</label>
            </div>
            <div className="flex items-center gap-4">
              <RadioInput
                isChecked={
                  defaultValues[toCamelCase(option.heading)] ===
                  "From profiles I follow"
                }
              />
              <label className="text-sm">From profiles I follow</label>
            </div>
            <div className="flex items-center gap-4">
              <RadioInput
                isChecked={
                  defaultValues[toCamelCase(option.heading)] === "From everyone"
                }
              />
              <label className="text-sm">From everyone</label>
            </div>
          </>
        )}

        <span className="text-xs text-[rgb(168,168,168)]">
          {option.example}
        </span>

        {idx < options.length - 1 && <Separator straight={true} />}
      </li>
    ))}
  </ul>
);

const PushNotificationSettings = ({ setActiveTab }) => (
  <>
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="transform rotate-90"
        onClick={() => setActiveTab(null)}
      >
        <DropDownArrowIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold">Push Notifications</h1>
    </div>

    <div className="flex flex-col gap-6">
      <h2>Push Notifications</h2>
      <div className="flex justify-between">
        <span>Pause all</span>
        <ToggleSwitch checked={settings.notifications.push.pauseAll} />
      </div>
      <Options
        defaultValues={settings.notifications.push}
        options={pushOptions}
      />
      <p className="text-xs text-[rgb(168,168,168)]">
        We&apos;ll only notify you for people who choose to tell others about
        their birthdays on Instagram. You can change who to tell about your
        birthday any time in your profile Personal information settings.
      </p>
    </div>
  </>
);

const EmailNotificationSettings = ({ setActiveTab }) => (
  <>
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="transform rotate-90"
        onClick={() => setActiveTab(null)}
      >
        <DropDownArrowIcon className="size-6" />
      </button>
      <h1 className="text-xl font-bold">Email Notifications</h1>
    </div>

    <Options
      defaultValues={settings.notifications.email}
      options={emailOptions}
    />
  </>
);

export default function NotificationSettingsPage() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      {activeTab ? (
        <div className="flex flex-col gap-10 max-w-[650px] p-4 my-5 w-full">
          {activeTab === "push" ? (
            <PushNotificationSettings setActiveTab={setActiveTab} />
          ) : (
            <EmailNotificationSettings setActiveTab={setActiveTab} />
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-between px-4 max-w-[600px] w-full">
          <div className="flex flex-col gap-4">
            <div className="hidden px-4 mb-5 mt-14 md:block">
              <h1 className="text-xl font-bold">Notifications</h1>
            </div>

            <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
              <button
                type="button"
                onClick={() => setActiveTab("push")}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-sm">Push Notifications</span>
                <div className="transform -rotate-90">
                  <DropDownArrowIcon />
                </div>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("email")}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-sm">Email Notifications</span>
                <div className="transform -rotate-90">
                  <DropDownArrowIcon />
                </div>
              </button>
            </div>
          </div>

          <div className="hidden w-full px-5 my-5 md:flex md:my-10">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
