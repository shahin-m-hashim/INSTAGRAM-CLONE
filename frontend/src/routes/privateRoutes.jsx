import { lazy } from "react";
import wait from "utils/wait";
import ErrorPage from "pages/ErrorPage";
import settingsRoutes from "routes/private/settingsRoutes";
import activityRoutes from "routes/private/activityRoutes";
import messengerRoutes from "routes/private/messengerRoutes";
import SwitchAccountsPage from "pages/private/SwitchAccountsPage";
import ProtectedLayout from "components/wrappers/ProtectedLayout";

const HomePage = lazy(() =>
  wait(300).then(() => import("pages/private/HomePage"))
);

const ProfilePage = lazy(() =>
  wait(300).then(() => import("pages/private/ProfilePage"))
);

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
