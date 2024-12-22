import { lazy } from "react";

const SupportRequestsLayout = lazy(() =>
  import("components/wrappers/SupportRequestsLayout")
);

const SupportRequestsPage = lazy(() =>
  import("pages/private/settings/help/SupportRequestsPage")
);

const ReportsSettingsPage = lazy(() =>
  import("pages/private/settings/help/supportRequests/ReportsSettingsPage")
);

const ViolationsSettingsPage = lazy(() =>
  import("pages/private/settings/help/supportRequests/ViolationsSettingsPage")
);

const SafetyNoticesSettingsPage = lazy(() =>
  import(
    "pages/private/settings/help/supportRequests/SafetyNoticesSettingsPage"
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
