import { lazy } from "react";

const AccountStatusSettingsLayout = lazy(() =>
  import("components/wrappers/AccountStatusSettingsLayout")
);

const AccountStatusSettingsPage = lazy(() =>
  import("pages/private/settings/AccountStatusSettingsPage")
);

const RemovedContentSettingsPage = lazy(() =>
  import("pages/private/settings/account_status/RemovedContentSettingsPage")
);

const LoweredContentSettingsPage = lazy(() =>
  import("pages/private/settings/account_status/LoweredContentSettingsPage")
);

const HiddenFeaturesSettingsPage = lazy(() =>
  import("pages/private/settings/account_status/HiddenFeaturesSettingsPage")
);

const accountStatusRoutes = {
  path: "account_status",
  element: <AccountStatusSettingsLayout />,
  children: [
    {
      path: "",
      element: <AccountStatusSettingsPage />,
    },
    {
      path: "removed_content",
      element: <RemovedContentSettingsPage />,
    },
    {
      path: "content_lowered",
      element: <LoweredContentSettingsPage />,
    },
    {
      path: "hidden_features",
      element: <HiddenFeaturesSettingsPage />,
    },
  ],
};

export default accountStatusRoutes;
