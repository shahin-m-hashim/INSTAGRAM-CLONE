import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import InboxPage from "pages/InboxPage";
import SignUpPage from "pages/SignUpPage";
import ProfilePage from "pages/ProfilePage";
import NotFoundPage from "pages/NotFoundPage";
import SettingsPage from "pages/SettingsPage";
import MessengerPage from "pages/MessengerPage";
import PasswordResetPage from "pages/PasswordResetPage";
import PublicLayout from "components/wrappers/PublicLayout";
import EditProfilePage from "pages/settings/EditProfilePage";
import SettingsLayout from "components/wrappers/SettingsLayout";
import ProtectedLayout from "components/wrappers/ProtectedLayout";
import MessengerLayout from "components/wrappers/MessengerLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotificationSettingsPage from "pages/settings/NotificationSettingsPage";

const router = createBrowserRouter([
  {
    path: "accounts",
    element: <PublicLayout />,
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
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
