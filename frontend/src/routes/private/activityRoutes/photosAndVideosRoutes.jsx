import { lazy } from "react";

const PhotosAndVideosLayout = lazy(() =>
  import("components/wrappers/PhotosAndVideosLayout")
);

const PhotosAndVideosPage = lazy(() =>
  import("pages/private/activity/PhotosAndVideosPage")
);

const ActivityPostsPage = lazy(() =>
  import("pages/private/activity/photos_and_videos/ActivityPostsPage")
);

const ActivityReelsPage = lazy(() =>
  import("pages/private/activity/photos_and_videos/ActivityReelsPage")
);

const ActivityHighlightsPage = lazy(() =>
  import("pages/private/activity/photos_and_videos/ActivityHighlightsPage")
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
