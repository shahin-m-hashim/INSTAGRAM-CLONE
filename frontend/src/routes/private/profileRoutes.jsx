import { lazy } from "react";

const PostsPage = lazy(() => import("pages/private/profile/PostsPage"));
const SavedPage = lazy(() => import("pages/private/profile/SavedPage"));
const TaggedPage = lazy(() => import("pages/private/profile/TaggedPage"));
const ProfileLayout = lazy(() => import("components/wrappers/ProfileLayout"));

const profileRoutes = {
  path: "username",
  element: <ProfileLayout />,
  children: [
    {
      path: "",
      element: <PostsPage />,
    },
    {
      path: "saved",
      element: <SavedPage />,
    },
    {
      path: "tagged",
      element: <TaggedPage />,
    },
  ],
};

export default profileRoutes;
