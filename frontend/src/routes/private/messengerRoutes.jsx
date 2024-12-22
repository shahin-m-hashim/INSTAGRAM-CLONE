import { lazy } from "react";

const MessengerLayout = lazy(() =>
  import("components/wrappers/MessengerLayout")
);

const InboxPage = lazy(() => import("pages/private/InboxPage"));

const MessengerPage = lazy(() => import("pages/private/MessengerPage"));

const messengerRoutes = {
  path: "direct/inbox",
  element: <MessengerLayout />,
  children: [
    { path: "", element: <MessengerPage /> },
    { path: ":username", element: <InboxPage /> },
  ],
};

export default messengerRoutes;
