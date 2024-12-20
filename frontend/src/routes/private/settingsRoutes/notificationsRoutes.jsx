import { lazy } from "react";
import wait from "utils/wait";
import NotificationSettingsLayout from "components/wrappers/NotificationSettingsLayout";

const NotificationSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/NotificationSettingsPage")
  )
);

const PushNotificationSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/notifications/PushNotificationSettingsPage")
  )
);

const EmailNotificationSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/settings/notifications/EmailNotificationSettingsPage")
  )
);

const notificationsRoute = {
  path: "notifications",
  element: <NotificationSettingsLayout />,
  children: [
    {
      path: "",
      element: <NotificationSettingsPage />,
    },
    { path: "push", element: <PushNotificationSettingsPage /> },
    { path: "email", element: <EmailNotificationSettingsPage /> },
  ],
};

export default notificationsRoute;
