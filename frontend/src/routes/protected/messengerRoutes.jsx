import { lazy } from "react";
import wait from "utils/wait";
import MessengerLayout from "components/wrappers/MessengerLayout";

// Cleaner way to wrap lazy imports with delay
const lazyWithDelay = (importPath, delay = 300) =>
  lazy(() => wait(delay).then(importPath));

// Use the helper function for imports
const InboxPage = lazyWithDelay(() => import("pages/InboxPage"));
const MessengerPage = lazyWithDelay(() => import("pages/MessengerPage"));

const messengerRoutes = {
  path: "direct/inbox",
  element: <MessengerLayout />,
  children: [
    { path: "", element: <MessengerPage /> },
    { path: ":username", element: <InboxPage /> },
  ],
};

export default messengerRoutes;
