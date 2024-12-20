import { lazy } from "react";
import wait from "utils/wait";
import SettingsLayout from "components/wrappers/SettingsLayout";
import helpRoutes from "routes/private/settingsRoutes/helpRoutes";
import hiddenWordsRoutes from "routes/private/settingsRoutes/hiddenWordsRoutes";
import notificationsRoutes from "routes/private/settingsRoutes/notificationsRoutes";
import accountStatusRoutes from "routes/private/settingsRoutes/accountStatusRoutes";
import messageAndStoryRepliesRoutes from "routes/private/settingsRoutes/messageAndStoryRepliesRoutes";

const SettingsPage = lazy(() =>
  wait(300).then(() => import("pages/private/SettingsPage"))
);

const EditProfilePage = lazy(() =>
  wait(300).then(() => import("pages/private/settings/EditProfilePage"))
);

const AccountPrivacySettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/AccountPrivacySettingsPage")
  )
);

const CloseFriendsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/CloseFriendsSettingsPage")
  )
);

const BlockedAccountsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/BlockedAccountsSettingsPage")
  )
);

const StoryAndLiveSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/StoryAndLiveSettingsPage")
  )
);

const TagsAndMentionsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/TagsAndMentionsSettingsPage")
  )
);

const CommentsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/private/settings/CommentsSettingsPage"))
);

const SharingAndReuseSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/SharingAndReuseSettingsPage")
  )
);

const RestrictedAccountsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/RestrictedAccountsSettingsPage")
  )
);

const LanguageSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/private/settings/LanguageSettingsPage"))
);

const MutedAccountsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/MutedAccountsSettingsPage")
  )
);

const ContentPreferencesSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/ContentPreferencesSettingsPage")
  )
);

const LikeAndShareCountsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/LikeAndShareCountsSettingsPage")
  )
);

const ArchivingAndDownloadingSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/ArchivingAndDownloadingSettingsPage")
  )
);

const WebsitePermissionsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/WebsitePermissionsSettingsPage")
  )
);

const AccountTypeAndToolsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/AccountTypeAndToolsSettingsPage")
  )
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
      path: "website_permissions",
      element: <WebsitePermissionsSettingsPage />,
    },
    {
      path: "account_type_and_tools",
      element: <AccountTypeAndToolsSettingsPage />,
    },
    helpRoutes,
    accountStatusRoutes,
  ],
};

export default settingsRoutes;
