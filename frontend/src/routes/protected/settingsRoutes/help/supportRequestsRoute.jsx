import { lazy } from "react";
import wait from "utils/wait";
import SupportRequestsLayout from "components/wrappers/SupportRequestsLayout";

const SupportRequestsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/help/SupportRequestsPage"))
);

const ReportsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/help/supportRequests/ReportsSettingsPage")
  )
);

const ViolationsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/help/supportRequests/ViolationsSettingsPage")
  )
);

const SafetyNoticesSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/help/supportRequests/SafetyNoticesSettingsPage")
  )
);

const supportRequestsRoute = {
  path: "support_requests",
  element: <SupportRequestsLayout />,
  children: [
    {
      path: "",
      element: <SupportRequestsPage />,
    },
    {
      path: "reports",
      element: <ReportsSettingsPage />,
    },
    {
      path: "safety_notices",
      element: <SafetyNoticesSettingsPage />,
    },
    {
      path: "violations",
      element: <ViolationsSettingsPage />,
    },
  ],
};

export default supportRequestsRoute;
