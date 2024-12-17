import { lazy } from "react";
import wait from "utils/wait";
import ErrorPage from "pages/ErrorPage";
import settingsRoutes from "routes/protected/settingsRoutes";
import messengerRoutes from "routes/protected/messengerRoutes";
import ProtectedLayout from "components/wrappers/ProtectedLayout";

const HomePage = lazy(() => wait(300).then(() => import("pages/HomePage")));

const YourActivityPage = lazy(() =>
  wait(300).then(() => import("pages/YourActivityPage"))
);

const ProfilePage = lazy(() =>
  wait(300).then(() => import("pages/ProfilePage"))
);

const protectedRoutes = {
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
    {
      path: "your_activity",
      element: <YourActivityPage />,
    },
    {
      path: "reels",
      element: <></>,
    },
    {
      path: "explore",
      element: <></>,
    },
    messengerRoutes,
    settingsRoutes,
  ],
};

export default protectedRoutes;
