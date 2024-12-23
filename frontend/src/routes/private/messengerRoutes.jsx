import { lazy } from "react";

const MessengerLayout = lazy(() =>
  import("components/wrappers/MessengerLayout")
);

const MessengerPage = lazy(() => import("pages/private/MessengerPage"));

const NewMessagePage = lazy(() =>
  import("pages/private/messenger/NewMessagePage")
);

const ChatPage = lazy(() => import("pages/private/messenger/ChatPage"));

const messengerRoutes = {
  path: "direct/inbox",
  element: <MessengerLayout />,
  children: [
    { path: "", element: <MessengerPage /> },
    { path: "new", element: <NewMessagePage /> },
    {
      path: ":username",
      element: <ChatPage />,
    },
  ],
};

export default messengerRoutes;
