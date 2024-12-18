import wait from "utils/wait";
import { lazy, Suspense } from "react";
import ErrorPage from "pages/ErrorPage";
import SwitchAccountsPage from "pages/SwitchAccountsPage";
import SplashScreen from "components/wrappers/SplashScreen";
import settingsRoutes from "routes/protected/settingsRoutes";
import activityRoutes from "routes/protected/activityRoutes";
import messengerRoutes from "routes/protected/messengerRoutes";
import ProtectedLayout from "components/wrappers/ProtectedLayout";

const HomePage = lazy(() => wait(300).then(() => import("pages/HomePage")));

const ProfilePage = lazy(() =>
  wait(300).then(() => import("pages/ProfilePage"))
);

const protectedRoutes = {
  path: "/",
  element: (
    <Suspense fallback={<SplashScreen />}>
      <ProtectedLayout />
    </Suspense>
  ),
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

export default protectedRoutes;
