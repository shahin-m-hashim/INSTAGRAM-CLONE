import { lazy } from "react";
import wait from "utils/wait";
import PhotosAndVideosLayout from "components/wrappers/PhotosAndVideosLayout";

const PhotosAndVideosPage = lazy(() =>
  wait(300).then(() => import("pages/private/activity/PhotosAndVideosPage"))
);

const ActivityPostsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/activity/photos_and_videos/ActivityPostsPage")
  )
);

const ActivityReelsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/activity/photos_and_videos/ActivityReelsPage")
  )
);

const ActivityHighlightsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/private/activity/photos_and_videos/ActivityHighlightsPage")
  )
);

const photosAndVideosRoutes = {
  path: "photos_and_videos",
  element: <PhotosAndVideosLayout />,
  children: [
    {
      path: "",
      element: <PhotosAndVideosPage />,
    },
    {
      path: "posts",
      element: <ActivityPostsPage />,
    },
    {
      path: "reels",
      element: <ActivityReelsPage />,
    },
    {
      path: "highlights",
      element: <ActivityHighlightsPage />,
    },
  ],
};

export default photosAndVideosRoutes;
