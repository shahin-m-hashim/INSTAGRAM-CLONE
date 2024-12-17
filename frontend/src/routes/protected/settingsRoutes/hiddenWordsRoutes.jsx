import { lazy } from "react";
import wait from "utils/wait";
import HiddenWordSettingsLayout from "components/wrappers/HiddenWordSettingsLayout";

const HiddenWordsSettingsPage = lazy(() =>
  wait(300).then(() => import("pages/settings/HiddenWordsSettingsPage"))
);

const ManageCustomWordsSettingsPage = lazy(() =>
  wait(300).then(() =>
    import("pages/settings/hidden_words/ManageCustomWordsSettingsPage")
  )
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
