import NavigateBackBtn from "components/NavigateBackBtn";

export default function SettingsHeader({ page }) {
  const getPageTitle = () => {
    switch (page[0]) {
      case "edit_profile":
        return "Edit profile";

      case "notifications":
        return page[1] === "push"
          ? "Push Notifications"
          : page[1] === "email"
          ? "Email Notifications"
          : "Notifications";

      case "account_privacy":
        return "Account Privacy";

      case "close_friends":
        return "Close Friends";

      case "blocked_accounts":
        return "Blocked Accounts";

      case "story_and_live":
        return "Story And Live";

      case "messages_and_story_replies":
        return page[1] === "message_controls"
          ? "Message Controls"
          : page[1] === "story_replies"
          ? "Story Replies"
          : page[1] === "show_activity_status"
          ? "Show Activity Status"
          : "Messages And Story Replies";

      case "tags_and_mentions":
        return "Tags And Mentions";

      case "comments":
        return "Comments";

      case "sharing_and_reuse":
        return "Sharing And Reuse";

      case "restricted_accounts":
        return "Restricted Accounts";

      case "hidden_words":
        return "Hidden Words";

      case "language":
        return "Language";

      case "muted_accounts":
        return "Muted Accounts";

      case "content_preferences":
        return "Content Preferences";

      case "like_and_share_counts":
        return "Like And Share Counts";

      case "archiving_and_downloading":
        return "Archiving And Downloading";

      case "switch_appearance":
        return "Switch Appearance";

      case "website_permissions":
        return "Website Permissions";

      case "account_type_and_tools":
        return "Account Type And Tools";

      case "help":
        return page[1] === "privacy_and_security"
          ? "Privacy And Security"
          : page[1] === "support_requests"
          ? page[2] === "reports"
            ? "Reports"
            : page[2] === "safety_notices"
            ? "Safety Notices"
            : page[2] === "violations"
            ? "Violations"
            : "Support Requests"
          : "Help";

      case "account_status":
        return page[1] === "removed_content"
          ? "Removed Content"
          : page[1] === "content_lowered"
          ? "Content Lowered"
          : page[1] === "hidden_features"
          ? "Hidden Features"
          : "Account Status";

      case "more":
        return "More";

      default:
        return "Settings And Privacy";
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute left-0">
        <NavigateBackBtn />
      </div>

      <h1 className="font-semibold">{getPageTitle()}</h1>
    </div>
  );
}
