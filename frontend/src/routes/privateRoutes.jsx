import { lazy } from "react";
import settingsRoutes from "routes/private/settingsRoutes";
import activityRoutes from "routes/private/activityRoutes";
import messengerRoutes from "routes/private/messengerRoutes";

const ProtectedLayout = lazy(() =>
  import("components/wrappers/ProtectedLayout")
);

const HomePage = lazy(() => import("pages/private/HomePage"));

const ProfilePage = lazy(() => import("pages/private/ProfilePage"));

const SwitchAccountsPage = lazy(() =>
  import("pages/private/SwitchAccountsPage")
);

const ErrorPage = lazy(() => import("pages/ErrorPage"));

const NotificationsPage = lazy(() => import("pages/private/NotificationsPage"));

const privateRoutes = {
  path: "/",
  element: <ProtectedLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "notifications",
      element: <NotificationsPage />,
    },
    {
      path: "username",
      element: <ProfilePage />,
    },
    activityRoutes,
    {
      path: "reels",
      element: <></>,
    },
    {
      path: "explore",
      element: <></>,
    },
    {
      path: "accounts/convert_to_professional_account",
      element: <SwitchAccountsPage />,
    },
    messengerRoutes,
    settingsRoutes,
  ],
};

export default privateRoutes;
