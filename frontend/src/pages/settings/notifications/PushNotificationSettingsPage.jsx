import ToggleSwitch from "components/ToggleSwitch";
import GroupedOptions from "components/GroupedOptions";
import NavigateBackBtn from "components/NavigateBackBtn";

const pushOptions = [
  {
    type: "extended",
    title: "Likes",
    example: "johnappleseed liked your photo.",
  },
  {
    type: "extended",
    title: "Likes and comments on photos of you",
    example: "johnappleseed commented on a post you're tagged in.",
  },
  {
    title: "Comments",
    type: "extended",
    example: `johnappleseed commented: "Nice shot!"`,
  },
  {
    title: "Comment likes",
    type: "on/off",
    example: `johnappleseed liked your comment: Nice shot!`,
  },
  {
    title: "Comment daily digest",
    type: "extended",
    example: `johnappleseed recently commented on this post: Nice shot!`,
  },
  {
    title: "First posts and stories",
    type: "extended",
    example: `See johnappleseed's first story on Instagram, and other similar notifications.`,
  },
  {
    title: "Notes",
    type: "on/off",
    example: `johnappleseed, janeappleseed and 3 others shared notes.`,
  },
  {
    title: "Add to post submissions",
    type: "on/off",
    example: `johnappleseed and 3 others want to add to your post. Review their submissions.`,
  },
  {
    title: "Added to post",
    type: "on/off",
    example: `johnappleseed added your photo to their post.`,
  },
  {
    title: "Mention requests",
    type: "extended",
    example: `johnappleseed requested to be mentioned in your story.`,
  },
  {
    title: "New followers",
    type: "on/off",
    example: `John Appleseed (johnappleseed) started following you.`,
  },
  {
    title: "Accepted follow requests",
    type: "on/off",
    example: `John Appleseed (johnappleseed) accepted your follow request.`,
  },
  {
    title: "Account suggestions",
    type: "on/off",
    example: `johnappleseed, who you might know, is on Instagram, and other similar notifications.`,
  },
  {
    title: "Mentions in bio",
    type: "extended",
    example: `johnappleseed mentioned you in their bio.`,
  },
  {
    title: "Message requests",
    type: "on/off",
    example: `johnappleseed wants to send you a message.`,
  },
  {
    title: "Messages from individual and group chats",
    type: "on/off",
    example: "johnappleseed sent you a message.",
  },
  {
    title: "Message reminders",
    type: "on/off",
    example: `johnappleseed sent you a message (1d ago).`,
  },
  {
    title: "Group requests",
    type: "on/off",
    example: `johnappleseed wants to add janeappleseed to your group.`,
  },
  {
    title: `Broadcast channel invites`,
    type: "on/off",
    example: `johnappleseed invited you to join their broadcast channel: Hello World!`,
  },
  {
    title: "Broadcast channel messages",
    type: "on/off",
    example: "johnappleseed sent you a message.",
  },
  {
    title: "Social channel messages",
    type: "on/off",
    example: "johnappleseed sent you a message.",
  },
  {
    title: "Original audio",
    type: "on/off",
    example: "johnappleseed created a reel with your audio.",
  },
  {
    title: "Remixes",
    type: "on/off",
    example: "johnappleseed remixed your reel.",
  },
  {
    title: "Live videos",
    type: "on/off",
    example: "johnappleseed started a live video.",
  },
  {
    title: "Recently uploaded reels",
    type: "on/off",
    example: "johnappleseed, johndoe and janedoe recently shared new reels.",
  },
  {
    title: "Most watched reels",
    type: "on/off",
    example: "Check out the most watched reels in your location today.",
  },
  {
    title: "Add Yours",
    type: "on/off",
    example: "johnappleseed started an Add Yours prompt.",
  },
  {
    title: "Reels made for you",
    type: "on/off",
    example: "See new reels made for you.",
  },
  {
    title: "Your fundraisers",
    type: "on/off",
    example: "johnappleseed donated to your fundraiser.",
  },
  {
    title: "Fundraisers by others",
    type: "on/off",
    example: "johnappleseed started a fundraiser.",
  },
  {
    title: "Reminders",
    type: "on/off",
    example: "You have unseen notifications, and other similar notifications.",
  },
  {
    title: "Product announcements & feedback",
    type: "on/off",
    example: "Download Boomerang, Instagram's latest app.",
  },
  {
    title: "Support requests",
    type: "on/off",
    example: "Your support request from July 10 was just updated.",
  },
  {
    title: "Trending places",
    type: "on/off",
    example:
      "John Appleseed Park is a trending place near you. See what's being shared.",
  },
  {
    title: "Birthdays",
    type: "on/off",
    example: "johnappleseed has a birthday today!",
  },
];

export default function PushNotificationSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Push Notifications</h1>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <span>Pause all</span>
          <ToggleSwitch />
        </div>
        <GroupedOptions options={pushOptions} type="advanced" />

        <p className="text-xs  text-secondary">
          We&apos;ll only notify you for people who choose to tell others about
          their birthdays on Instagram. You can change who to tell about your
          birthday any time in your profile Personal information settings.
        </p>
      </div>
    </>
  );
}
