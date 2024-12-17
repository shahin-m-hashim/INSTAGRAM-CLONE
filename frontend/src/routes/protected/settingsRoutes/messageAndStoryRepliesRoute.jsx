import { lazy } from "react";
import wait from "utils/wait";
import MessagesAndStoryRepliesSettingsLayout from "components/wrappers/MessagesAndStoryRepliesSettingsLayout";

const MessagesAndStoryRepliesSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/MessagesAndStoryRepliesSettingsPage")
  )
);

const MessageControlsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import(
      "pages/settings/messages_and_story_replies/MessageControlsSettingsPage"
    )
  )
);

const StoryRepliesSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/messages_and_story_replies/StoryRepliesSettingsPage")
  )
);

const ActivityStatusSettingsPage = lazy(() =>
  wait(300).then(() =>
    import(
      "pages/settings/messages_and_story_replies/ActivityStatusSettingsPage"
    )
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
