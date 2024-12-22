import { lazy } from "react";
import interactionsRoutes from "routes/private/activityRoutes/interactionsRoutes";
import photosAndVideosRoutes from "routes/private/activityRoutes/photosAndVideosRoutes";

const YourActivityLayout = lazy(() =>
  import("components/wrappers/YourActivityLayout")
);

const ActivityPage = lazy(() => import("pages/private/ActivityPage"));

const DownloadYourInformationPage = lazy(() =>
  import("pages/private/activity/DownloadYourInformationPage")
);

const AdActivityPage = lazy(() =>
  import("pages/private/activity/AdActivityPage")
);

const AccountHistoryPage = lazy(() =>
  import("pages/private/activity/AccountHistoryPage")
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
