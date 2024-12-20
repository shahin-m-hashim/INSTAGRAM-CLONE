import { lazy } from "react";
import wait from "utils/wait";
import AccountStatusSettingsLayout from "components/wrappers/AccountStatusSettingsLayout";

const AccountStatusSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/AccountStatusSettingsPage")
  )
);

const RemovedContentSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/account_status/RemovedContentSettingsPage")
  )
);

const LoweredContentSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/account_status/LoweredContentSettingsPage")
  )
);

const HiddenFeaturesSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/account_status/HiddenFeaturesSettingsPage")
  )
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
