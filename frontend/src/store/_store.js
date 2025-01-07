import { create } from "zustand";
import createUiSlice from "./uiSlice";
import createAuthSlice from "./authSlice";
import createThemeSlice from "./themeSlice";
import { devtools } from "zustand/middleware";
import createVideoSlice from "store/videoSlice";

const useStore = create(
  devtools((set, get) => ({
    ...createUiSlice(set),
    ...createAuthSlice(set),
    ...createVideoSlice(set),
    ...createThemeSlice(set, get),
  }))
);

export default useStore;
