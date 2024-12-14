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
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import PasswordResetPage from "pages/PasswordResetPage";

// PROTECTED
const HomePage = lazy(() => wait(300).then(() => import("pages/HomePage")));
const InboxPage = lazy(() => wait(300).then(() => import("pages/InboxPage")));

const ProfilePage = lazy(() =>
  wait(300).then(() => import("pages/ProfilePage"))
);

const SettingsPage = lazy(() =>
  wait(300).then(() => import("pages/SettingsPage"))
);

const MessengerPage = lazy(() =>
  wait(300).then(() => import("pages/MessengerPage"))
);

const EditProfilePage = lazy(() =>
  wait(300).then(() => import("pages/settings/EditProfilePage"))
);

const NotificationSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/NotificationSettingsPage"))
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
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
