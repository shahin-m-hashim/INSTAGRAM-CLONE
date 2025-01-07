import { create } from "zustand";
import createUiSlice from "./uiSlice";
import createAuthSlice from "./authSlice";
import createThemeSlice from "./themeSlice";
import { devtools } from "zustand/middleware";
import createVideosSlice from "store/videosSlice";
import createImagesSlice from "store/imagesSlice";

const useStore = create(
  devtools((set, get) => ({
    ...createUiSlice(set, get),
    ...createAuthSlice(set, get),
    ...createThemeSlice(set, get),
    ...createVideosSlice(set, get),
    ...createImagesSlice(set, get),
  }))
);

export default useStore;
