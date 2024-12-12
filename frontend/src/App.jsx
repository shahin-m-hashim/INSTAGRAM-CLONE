import {
  Outlet,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import ProfilePage from "pages/ProfilePage";
import NotFoundPage from "pages/NotFoundPage";
import SettingsPage from "pages/SettingsPage";
import MessengerPage from "pages/MessengerPage";
import AppLayout from "components/wrappers/AppLayout";
import PasswordResetPage from "pages/PasswordResetPage";
import EditProfilePage from "pages/settings/EditProfilePage";
import SettingsLayout from "components/wrappers/SettingsLayout";
import NotificationSettingsPage from "pages/settings/NotificationSettingsPage";

const isAuthenticated = true;

const router = createBrowserRouter([
  {
    path: "accounts",
    element: isAuthenticated ? <Navigate to="/" replace /> : <Outlet />,
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
    element: <AppLayout />,
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
        element: <MessengerPage />,
      },
      {
        path: "profile",
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
