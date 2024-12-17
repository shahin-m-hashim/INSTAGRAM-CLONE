import ToggleSwitch from "components/ToggleSwitch";
import GroupedOptions from "components/GroupedOptions";
import NavigateBackBtn from "components/NavigateBackBtn";

const pushOptions = [
  {
    type: "extended",
    heading: "Likes",
    example: "johnappleseed liked your photo.",
  },
  {
    type: "extended",
    heading: "Likes and comments on photos of you",
    example: "johnappleseed commented on a post you're tagged in.",
  },
  {
    heading: "Comments",
    type: "extended",
    example: `johnappleseed commented: "Nice shot!"`,
  },
  {
    heading: "Comment likes",
    type: "on/off",
    example: `johnappleseed liked your comment: Nice shot!`,
  },
  {
    heading: "Comment daily digest",
    type: "extended",
    example: `johnappleseed recently commented on this post: Nice shot!`,
  },
  {
    heading: "First posts and stories",
    type: "extended",
    example: `See johnappleseed's first story on Instagram, and other similar notifications.`,
  },
  {
    heading: "Notes",
    type: "on/off",
    example: `johnappleseed, janeappleseed and 3 others shared notes.`,
  },
  {
    heading: "Add to post submissions",
    type: "on/off",
    example: `johnappleseed and 3 others want to add to your post. Review their submissions.`,
  },
  {
    heading: "Added to post",
    type: "on/off",
    example: `johnappleseed added your photo to their post.`,
  },
  {
    heading: "Mention requests",
    type: "extended",
    example: `johnappleseed requested to be mentioned in your story.`,
  },
  {
    heading: "New followers",
    type: "on/off",
    example: `John Appleseed (johnappleseed) started following you.`,
  },
  {
    heading: "Accepted follow requests",
    type: "on/off",
    example: `John Appleseed (johnappleseed) accepted your follow request.`,
  },
  {
    heading: "Account suggestions",
    type: "on/off",
    example: `johnappleseed, who you might know, is on Instagram, and other similar notifications.`,
  },
  {
    heading: "Mentions in bio",
    type: "extended",
    example: `johnappleseed mentioned you in their bio.`,
  },
  {
    heading: "Message requests",
    type: "on/off",
    example: `johnappleseed wants to send you a message.`,
  },
  {
    heading: "Messages from individual and group chats",
    type: "on/off",
    example: "johnappleseed sent you a message.",
  },
  {
    heading: "Message reminders",
    type: "on/off",
    example: `johnappleseed sent you a message (1d ago).`,
  },
  {
    heading: "Group requests",
    type: "on/off",
    example: `johnappleseed wants to add janeappleseed to your group.`,
  },
  {
    heading: `Broadcast channel invites`,
    type: "on/off",
    example: `johnappleseed invited you to join their broadcast channel: Hello World!`,
  },
  {
    heading: "Broadcast channel messages",
    type: "on/off",
    example: "johnappleseed sent you a message.",
  },
  {
    heading: "Social channel messages",
    type: "on/off",
    example: "johnappleseed sent you a message.",
  },
  {
    heading: "Original audio",
    type: "on/off",
    example: "johnappleseed created a reel with your audio.",
  },
  {
    heading: "Remixes",
    type: "on/off",
    example: "johnappleseed remixed your reel.",
  },
  {
    heading: "Live videos",
    type: "on/off",
    example: "johnappleseed started a live video.",
  },
  {
    heading: "Recently uploaded reels",
    type: "on/off",
    example: "johnappleseed, johndoe and janedoe recently shared new reels.",
  },
  {
    heading: "Most watched reels",
    type: "on/off",
    example: "Check out the most watched reels in your location today.",
  },
  {
    heading: "Add Yours",
    type: "on/off",
    example: "johnappleseed started an Add Yours prompt.",
  },
  {
    heading: "Reels made for you",
    type: "on/off",
    example: "See new reels made for you.",
  },
  {
    heading: "Your fundraisers",
    type: "on/off",
    example: "johnappleseed donated to your fundraiser.",
  },
  {
    heading: "Fundraisers by others",
    type: "on/off",
    example: "johnappleseed started a fundraiser.",
  },
  {
    heading: "Reminders",
    type: "on/off",
    example: "You have unseen notifications, and other similar notifications.",
  },
  {
    heading: "Product announcements & feedback",
    type: "on/off",
    example: "Download Boomerang, Instagram's latest app.",
  },
  {
    heading: "Support requests",
    type: "on/off",
    example: "Your support request from July 10 was just updated.",
  },
  {
    heading: "Trending places",
    type: "on/off",
    example:
      "John Appleseed Park is a trending place near you. See what's being shared.",
  },
  {
    heading: "Birthdays",
    type: "on/off",
    example: "johnappleseed has a birthday today!",
  },
];

export default function PushNotificationSettingsPage() {
  return (
    <>
      <div className="flex items-center gap-4 mb-5 -ml-2">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Push Notifications</h1>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <span>Pause all</span>
          <ToggleSwitch checked={true} />
        </div>
        <GroupedOptions options={pushOptions} type="advanced" />

        <p className="text-xs text-[rgb(168,168,168)]">
          We&apos;ll only notify you for people who choose to tell others about
          their birthdays on Instagram. You can change who to tell about your
          birthday any time in your profile Personal information settings.
        </p>
      </div>
    </>
  );
}
