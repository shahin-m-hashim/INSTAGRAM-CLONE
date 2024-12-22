import { lazy } from "react";
import supportRequestsRoute from "routes/private/settingsRoutes/help/supportRequestsRoute";

const HelpSettingsLayout = lazy(() =>
  import("components/wrappers/HelpSettingsLayout")
);

const HelpSettingsPage = lazy(() =>
  import("pages/private/settings/HelpSettingsPage")
);

const PrivacyAndSecurityPage = lazy(() =>
  import("pages/private/settings/help/PrivacyAndSecurityPage")
);

const helpRoutes = {
  path: "help",
  element: <HelpSettingsLayout />,
  children: [
    {
      path: "",
      element: <HelpSettingsPage />,
    },
    {
      path: "privacy_and_security",
      element: <PrivacyAndSecurityPage />,
    },
    supportRequestsRoute,
  ],
};

export default helpRoutes;
