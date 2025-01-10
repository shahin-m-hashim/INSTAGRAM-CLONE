import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createUiSlice from "./uiSlice";
import createAuthSlice from "./authSlice";
import createThemeSlice from "./themeSlice";
import createFormsSlice from "store/formsSlice";
import createVideosSlice from "store/videosSlice";
import createImagesSlice from "store/imagesSlice";

const useStore = create(
  devtools(
    immer((set, get) => ({
      ...createUiSlice(set, get),
      ...createAuthSlice(set, get),
      ...createFormsSlice(set, get),
      ...createThemeSlice(set, get),
      ...createVideosSlice(set, get),
      ...createImagesSlice(set, get),
    }))
  )
);

export default useStore;
