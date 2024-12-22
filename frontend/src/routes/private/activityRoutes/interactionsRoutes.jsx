import { lazy } from "react";

const InteractionsLayout = lazy(() =>
  import("components/wrappers/InteractionsLayout")
);

const InteractionsPage = lazy(() =>
  import("pages/private/activity/InteractionsPage")
);

const ActivityInteractionLikesPage = lazy(() =>
  import("pages/private/activity/interactions/ActivityInteractionLikesPage")
);

const ActivityInteractionCommentsPage = lazy(() =>
  import("pages/private/activity/interactions/ActivityInteractionCommentsPage")
);

const ActivityInteractionStoryRepliesPage = lazy(() =>
  import(
    "pages/private/activity/interactions/ActivityInteractionStoryRepliesPage"
  )
);

const ActivityInteractionReviewsPage = lazy(() =>
  import("pages/private/activity/interactions/ActivityInteractionReviewsPage")
);

const interactionsRoutes = {
  path: "interactions",
  element: <InteractionsLayout />,
  children: [
    {
      path: "",
      element: <InteractionsPage />,
    },
    {
      path: "likes",
      element: <ActivityInteractionLikesPage />,
    },
    {
      path: "comments",
      element: <ActivityInteractionCommentsPage />,
    },
    {
      path: "story_replies",
      element: <ActivityInteractionStoryRepliesPage />,
    },
    {
      path: "reviews",
      element: <ActivityInteractionReviewsPage />,
    },
  ],
};

export default interactionsRoutes;
