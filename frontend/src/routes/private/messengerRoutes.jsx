import { lazy } from "react";
import { Outlet } from "react-router-dom";

const MessengerLayout = lazy(() =>
  import("components/wrappers/MessengerLayout")
);

const MessengerPage = lazy(() => import("pages/private/MessengerPage"));

const NewMessagePage = lazy(() =>
  import("pages/private/messenger/NewMessagePage")
);

const ChatPage = lazy(() => import("pages/private/messenger/ChatPage"));

const InboxPage = lazy(() => import("pages/private/messenger/InboxPage"));

const ChatDetailsPage = lazy(() =>
  import("pages/private/messenger/ChatDetailsPage")
);

const messengerRoutes = {
  path: "direct",
  element: <MessengerLayout />,
  children: [
    { path: "", element: <MessengerPage /> },
    { path: "inbox", element: <InboxPage /> },
    { path: "new", element: <NewMessagePage /> },
    {
      path: ":username",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <ChatPage />,
        },
        {
          path: "details",
          element: <ChatDetailsPage />,
        },
      ],
    },
  ],
};

export default messengerRoutes;
