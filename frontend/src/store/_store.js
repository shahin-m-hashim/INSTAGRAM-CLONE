import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createUiSlice from "./uiSlice";
import createAuthSlice from "./authSlice";
import createThemeSlice from "./themeSlice";
import createVideosSlice from "store/videosSlice";
import createImagesSlice from "store/imagesSlice";

const useStore = create(
  immer(
    devtools((set, get) => ({
      ...createUiSlice(set, get),
      ...createAuthSlice(set, get),
      ...createThemeSlice(set, get),
      ...createVideosSlice(set, get),
      ...createImagesSlice(set, get),
    }))
  )
);

export default useStore;
