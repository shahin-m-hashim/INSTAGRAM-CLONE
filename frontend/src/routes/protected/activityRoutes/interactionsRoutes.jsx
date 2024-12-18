import { lazy } from "react";
import wait from "utils/wait";
import InteractionsLayout from "components/wrappers/InteractionsLayout";

const InteractionsPage = lazy(() =>
  wait(300).then(() => import("pages/activity/InteractionsPage"))
);

const ActivityInteractionLikesPage = lazy(() =>
  wait(300).then(() =>
    import("pages/activity/interactions/ActivityInteractionLikesPage")
  )
);

const ActivityInteractionCommentsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/activity/interactions/ActivityInteractionCommentsPage")
  )
);

const ActivityInteractionStoryRepliesPage = lazy(() =>
  wait(300).then(() =>
    import("pages/activity/interactions/ActivityInteractionStoryRepliesPage")
  )
);

const ActivityInteractionReviewsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/activity/interactions/ActivityInteractionReviewsPage")
  )
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
