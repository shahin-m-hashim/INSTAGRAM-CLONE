import { lazy } from "react";
import wait from "utils/wait";
import YourActivityLayout from "components/wrappers/YourActivityLayout";
import interactionsRoutes from "routes/private/activityRoutes/interactionsRoutes";
import photosAndVideosRoutes from "routes/private/activityRoutes/photosAndVideosRoutes";

const ActivityPage = lazy(() =>
  wait(300).then(() => import("pages/private/ActivityPage"))
);

const DownloadYourInformationPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/activity/DownloadYourInformationPage")
  )
);

const AdActivityPage = lazy(() =>
  wait(300).then(() => import("pages/private/activity/AdActivityPage"))
);

const AccountHistoryPage = lazy(() =>
  wait(300).then(() => import("pages/private/activity/AccountHistoryPage"))
);

const activityRoutes = {
  path: "your_activity",
  element: <YourActivityLayout />,
  children: [
    {
      path: "",
      element: <ActivityPage />,
    },
    interactionsRoutes,
    photosAndVideosRoutes,
    {
      path: "account_history",
      element: <AccountHistoryPage />,
    },
    {
      path: "ad_activity",
      element: <AdActivityPage />,
    },
    {
      path: "download_your_info",
      element: <DownloadYourInformationPage />,
    },
  ],
};

export default activityRoutes;
