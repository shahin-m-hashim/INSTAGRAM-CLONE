import { lazy } from "react";
import wait from "utils/wait";
import HelpSettingsLayout from "components/wrappers/HelpSettingsLayout";
import supportRequestsRoute from "routes/private/settingsRoutes/help/supportRequestsRoute";

const HelpSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/private/settings/HelpSettingsPage"))
);

const PrivacyAndSecurityPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/help/PrivacyAndSecurityPage")
  )
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
