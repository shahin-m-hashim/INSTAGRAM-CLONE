import { lazy } from "react";
import wait from "utils/wait";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// COMMON
import ErrorPage from "pages/ErrorPage";
import NotFoundPage from "pages/NotFoundPage";

// LAYOUTS
import PublicLayout from "components/wrappers/PublicLayout";
import SettingsLayout from "components/wrappers/SettingsLayout";
import ProtectedLayout from "components/wrappers/ProtectedLayout";
import MessengerLayout from "components/wrappers/MessengerLayout";

// PUBLIC
const LoginPage = lazy(() => wait(300).then(() => import("pages/LoginPage")));
const SignUpPage = lazy(() => wait(300).then(() => import("pages/SignUpPage")));

const PasswordResetPage = lazy(() =>
  wait(300).then(() => import("pages/PasswordResetPage"))
);

// PROTECTED
const HomePage = lazy(() => wait(300).then(() => import("pages/HomePage")));
const InboxPage = lazy(() => wait(300).then(() => import("pages/InboxPage")));

const ProfilePage = lazy(() =>
  wait(300).then(() => import("pages/ProfilePage"))
);

const MessengerPage = lazy(() =>
  wait(300).then(() => import("pages/MessengerPage"))
);

const YourActivityPage = lazy(() =>
  wait(300).then(() => import("pages/YourActivityPage"))
);

const SettingsPage = lazy(() =>
  wait(300).then(() => import("pages/SettingsPage"))
);

const EditProfilePage = lazy(() =>
  wait(300).then(() => import("pages/settings/EditProfilePage"))
);

const NotificationSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/NotificationSettingsPage"))
);

const AccountPrivacySettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/AccountPrivacySettingsPage"))
);

const CloseFriendsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/CloseFriendsSettingsPage"))
);

const BlockedAccountsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/BlockedAccountsSettingsPage"))
);

const StoryAndLiveSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/StoryAndLiveSettingsPage"))
);

const MessagesAndStoryRepliesSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/MessagesAndStoryRepliesSettingsPage")
  )
);

const TagsAndMentionsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/TagsAndMentionsSettingsPage"))
);

const CommentsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/CommentsSettingsPage"))
);

const SharingAndReuseSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/SharingAndReuseSettingsPage"))
);

const RestrictedAccountsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/RestrictedAccountsSettingsPage"))
);

const HiddenWordsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/HiddenWordsSettingsPage"))
);

const LanguageSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/LanguageSettingsPage"))
);

const MutedAccountsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/MutedAccountsSettingsPage"))
);

const ContentPreferencesSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/ContentPreferencesSettingsPage"))
);

const LikeAndShareCountsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/LikeAndShareCountsSettingsPage"))
);

const ArchivingAndDownloadingSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/ArchivingAndDownloadingSettingsPage")
  )
);

const WebsitePermissionsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/WebsitePermissionsSettingsPage"))
);

const AccountTypeAndToolsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/AccountTypeAndToolsSettingsPage"))
);

const HelpSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/HelpSettingsPage"))
);

const AccountStatusSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/AccountStatusSettingsPage"))
);

const router = createBrowserRouter([
  {
    path: "accounts",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <NotFoundPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "password/reset",
        element: <PasswordResetPage />,
      },
    ],
  },

  {
    path: "/",
    element: <ProtectedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "reels",
        element: <></>,
      },
      {
        path: "explore",
        element: <></>,
      },
      {
        path: "direct/inbox",
        element: <MessengerLayout />,
        children: [
          {
            path: "",
            element: <MessengerPage />,
          },
          {
            path: ":username",
            element: <InboxPage />,
          },
        ],
      },
      {
        path: "username",
        element: <ProfilePage />,
      },
      {
        path: "your_activity",
        element: <YourActivityPage />,
      },
      {
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
          {
            path: "notifications",
            element: <NotificationSettingsPage />,
          },
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
          {
            path: "messages_and_story_replies",
            element: <MessagesAndStoryRepliesSettingsPage />,
          },
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
          {
            path: "hidden_words",
            element: <HiddenWordsSettingsPage />,
          },
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
          {
            path: "help",
            element: <HelpSettingsPage />,
          },
          {
            path: "account_status",
            element: <AccountStatusSettingsPage />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
