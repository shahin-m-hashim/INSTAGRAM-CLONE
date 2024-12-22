import { lazy } from "react";

const HiddenWordSettingsLayout = lazy(() =>
  import("components/wrappers/HiddenWordSettingsLayout")
);

const HiddenWordsSettingsPage = lazy(() =>
  import("pages/private/settings/HiddenWordsSettingsPage")
);

const ManageCustomWordsSettingsPage = lazy(() =>
  import("pages/private/settings/hidden_words/ManageCustomWordsSettingsPage")
);

const hiddenWordsRoute = {
  path: "hidden_words",
  element: <HiddenWordSettingsLayout />,
  children: [
    {
      path: "",
      element: <HiddenWordsSettingsPage />,
    },
    {
      path: "manage_custom_words",
      element: <ManageCustomWordsSettingsPage />,
    },
  ],
};

export default hiddenWordsRoute;
