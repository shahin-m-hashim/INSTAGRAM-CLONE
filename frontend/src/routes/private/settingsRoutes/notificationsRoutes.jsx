import { lazy } from "react";

const NotificationSettingsLayout = lazy(() =>
  import("components/wrappers/NotificationSettingsLayout")
);

const NotificationSettingsPage = lazy(() =>
  import("pages/private/settings/NotificationSettingsPage")
);

const PushNotificationSettingsPage = lazy(() =>
  import("pages/private/settings/notifications/PushNotificationSettingsPage")
);

const EmailNotificationSettingsPage = lazy(() =>
  import("pages/private/settings/notifications/EmailNotificationSettingsPage")
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
