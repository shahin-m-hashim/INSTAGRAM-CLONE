import { lazy } from "react";
import helpRoutes from "routes/private/settingsRoutes/helpRoutes";
import hiddenWordsRoutes from "routes/private/settingsRoutes/hiddenWordsRoutes";
import notificationsRoutes from "routes/private/settingsRoutes/notificationsRoutes";
import accountStatusRoutes from "routes/private/settingsRoutes/accountStatusRoutes";
import messageAndStoryRepliesRoutes from "routes/private/settingsRoutes/messageAndStoryRepliesRoutes";

const SettingsLayout = lazy(() => import("components/wrappers/SettingsLayout"));

const SettingsPage = lazy(() => import("pages/private/SettingsPage"));

const EditProfilePage = lazy(() =>
  import("pages/private/settings/EditProfilePage")
);

const AccountPrivacySettingsPage = lazy(() =>
  import("pages/private/settings/AccountPrivacySettingsPage")
);

const CloseFriendsSettingsPage = lazy(() =>
  import("pages/private/settings/CloseFriendsSettingsPage")
);

const BlockedAccountsSettingsPage = lazy(() =>
  import("pages/private/settings/BlockedAccountsSettingsPage")
);

const StoryAndLiveSettingsPage = lazy(() =>
  import("pages/private/settings/StoryAndLiveSettingsPage")
);

const TagsAndMentionsSettingsPage = lazy(() =>
  import("pages/private/settings/TagsAndMentionsSettingsPage")
);

const CommentsSettingsPage = lazy(() =>
  import("pages/private/settings/CommentsSettingsPage")
);

const SharingAndReuseSettingsPage = lazy(() =>
  import("pages/private/settings/SharingAndReuseSettingsPage")
);

const RestrictedAccountsSettingsPage = lazy(() =>
  import("pages/private/settings/RestrictedAccountsSettingsPage")
);

const LanguageSettingsPage = lazy(() =>
  import("pages/private/settings/LanguageSettingsPage")
);

const MutedAccountsSettingsPage = lazy(() =>
  import("pages/private/settings/MutedAccountsSettingsPage")
);

const ContentPreferencesSettingsPage = lazy(() =>
  import("pages/private/settings/ContentPreferencesSettingsPage")
);

const LikeAndShareCountsSettingsPage = lazy(() =>
  import("pages/private/settings/LikeAndShareCountsSettingsPage")
);

const ArchivingAndDownloadingSettingsPage = lazy(() =>
  import("pages/private/settings/ArchivingAndDownloadingSettingsPage")
);

const WebsitePermissionsSettingsPage = lazy(() =>
  import("pages/private/settings/WebsitePermissionsSettingsPage")
);

const AccountTypeAndToolsSettingsPage = lazy(() =>
  import("pages/private/settings/AccountTypeAndToolsSettingsPage")
);

const SwitchAppearancePage = lazy(() =>
  import("pages/private/settings/SwitchAppearancePage")
);

const MoreSettingsPage = lazy(() =>
  import("pages/private/settings/MoreSettingsPage")
);

const settingsRoutes = {
  path: "settings",
  element: <SettingsLayout />,
  children: [
    {
      path: "",
      element: <SettingsPage />,
    },
    {
      path: "edit_profile",
      element: <EditProfilePage />,
    },
    notificationsRoutes,
    {
      path: "account_privacy",
      element: <AccountPrivacySettingsPage />,
    },
    {
      path: "close_friends",
      element: <CloseFriendsSettingsPage />,
    },
    {
      path: "blocked_accounts",
      element: <BlockedAccountsSettingsPage />,
    },
    {
      path: "story_and_live",
      element: <StoryAndLiveSettingsPage />,
    },
    messageAndStoryRepliesRoutes,
    {
      path: "tags_and_mentions",
      element: <TagsAndMentionsSettingsPage />,
    },
    {
      path: "comments",
      element: <CommentsSettingsPage />,
    },
    {
      path: "sharing_and_reuse",
      element: <SharingAndReuseSettingsPage />,
    },
    {
      path: "restricted_accounts",
      element: <RestrictedAccountsSettingsPage />,
    },
    hiddenWordsRoutes,
    {
      path: "language",
      element: <LanguageSettingsPage />,
    },
    {
      path: "muted_accounts",
      element: <MutedAccountsSettingsPage />,
    },
    {
      path: "content_preferences",
      element: <ContentPreferencesSettingsPage />,
    },
    {
      path: "like_and_share_counts",
      element: <LikeAndShareCountsSettingsPage />,
    },
    {
      path: "archiving_and_downloading",
      element: <ArchivingAndDownloadingSettingsPage />,
    },
    {
      path: "switch_appearance",
      element: <SwitchAppearancePage />,
    },
    {
      path: "website_permissions",
      element: <WebsitePermissionsSettingsPage />,
    },
    {
      path: "account_type_and_tools",
      element: <AccountTypeAndToolsSettingsPage />,
    },
    helpRoutes,
    accountStatusRoutes,
    {
      path: "more",
      element: <MoreSettingsPage />,
    },
  ],
};

export default settingsRoutes;
