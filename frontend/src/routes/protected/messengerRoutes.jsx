import { lazy } from "react";
import wait from "utils/wait";
import MessengerLayout from "components/wrappers/MessengerLayout";

const InboxPage = lazy(() => wait(300).then(() => import("pages/InboxPage")));

const MessengerPage = lazy(() =>
  wait(300).then(() => import("pages/MessengerPage"))
);

const messengerRoutes = {
  path: "direct/inbox",
  element: <MessengerLayout />,
  children: [
    { path: "", element: <MessengerPage /> },
    { path: ":username", element: <InboxPage /> },
  ],
};

export default messengerRoutes;
