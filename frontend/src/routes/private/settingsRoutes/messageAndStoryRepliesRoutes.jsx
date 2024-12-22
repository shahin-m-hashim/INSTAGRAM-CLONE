import { lazy } from "react";

const MessagesAndStoryRepliesSettingsLayout = lazy(() =>
  import("components/wrappers/MessagesAndStoryRepliesSettingsLayout")
);

const MessagesAndStoryRepliesSettingsPage = lazy(() =>
  import("pages/private/settings/MessagesAndStoryRepliesSettingsPage")
);

const MessageControlsSettingsPage = lazy(() =>
  import(
    "pages/private/settings/messages_and_story_replies/MessageControlsSettingsPage"
  )
);

const StoryRepliesSettingsPage = lazy(() =>
  import(
    "pages/private/settings/messages_and_story_replies/StoryRepliesSettingsPage"
  )
);

const ActivityStatusSettingsPage = lazy(() =>
  import(
    "pages/private/settings/messages_and_story_replies/ActivityStatusSettingsPage"
  )
);

const messageAndStoryRepliesRoute = {
  path: "messages_and_story_replies",
  element: <MessagesAndStoryRepliesSettingsLayout />,
  children: [
    {
      path: "",
      element: <MessagesAndStoryRepliesSettingsPage />,
    },
    {
      path: "message_controls",
      element: <MessageControlsSettingsPage />,
    },
    {
      path: "story_replies",
      element: <StoryRepliesSettingsPage />,
    },
    {
      path: "show_activity_status",
      element: <ActivityStatusSettingsPage />,
    },
  ],
};

export default messageAndStoryRepliesRoute;
