import { create } from "zustand";
import createUiSlice from "./uiSlice";
import createAuthSlice from "./authSlice";
import createThemeSlice from "./themeSlice";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set, get) => ({
    ...createUiSlice(set, get),
    ...createAuthSlice(set, get),
    ...createThemeSlice(set, get),
  }))
);

export default useStore;
