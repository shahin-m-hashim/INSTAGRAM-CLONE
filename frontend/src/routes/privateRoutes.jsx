import { lazy } from "react";
import profileRoutes from "routes/private/profileRoutes";
import settingsRoutes from "routes/private/settingsRoutes";
import activityRoutes from "routes/private/activityRoutes";
import messengerRoutes from "routes/private/messengerRoutes";

const ProtectedLayout = lazy(() =>
  import("components/wrappers/ProtectedLayout")
);

const SwitchAccountsPage = lazy(() =>
  import("pages/private/SwitchAccountsPage")
);

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/private/HomePage"));
const ReelsPage = lazy(() => import("pages/private/ReelsPage"));
const ExplorePage = lazy(() => import("pages/private/ExplorePage"));
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
    profileRoutes,
    activityRoutes,
    {
      path: "reels",
      element: <ReelsPage />,
    },
    {
      path: "explore",
      element: <ExplorePage />,
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
