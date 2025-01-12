const initial = {
  widgets: {
    primary: null,
    secondary: null,
  },
  activeSidebar: null,
  showThemeSwitcher: false,
  loginPagePhoneFrameIdx: 0,
};

const createUiSlice = (set) => ({
  ...initial,

  resetUiSlice: () => set(initial, undefined, "ui/resetUiSlice"),

  setPrimaryWidget: (widget) =>
    set(
      (state) => {
        state.widgets.primary = widget;
      },
      undefined,
      "ui/setPrimaryWidget"
    ),

  togglePrimaryWidget: (widget) =>
    set(
      (state) => {
        state.showThemeSwitcher = false;
        state.widgets.primary =
          state.widgets.primary === widget ? null : widget;
      },
      false,
      "ui/togglePrimaryWidget"
    ),

  setSecondaryWidget: (widget) =>
    set(
      (state) => {
        state.widgets.secondary = widget;
      },
      undefined,
      "ui/setSecondaryWidget"
    ),

  toggleSecondaryWidget: (widget) =>
    set(
      (state) => {
        state.widgets.secondary =
          state.widgets.secondary === widget ? null : widget;
      },
      undefined,
      "ui/toggleSecondaryWidget"
    ),

  toggleActiveSidebar: (sidebar) =>
    set(
      (state) => ({
        activeSidebar: state.activeSidebar === sidebar ? null : sidebar,
      }),
      undefined,
      "ui/toggleActiveSidebar"
    ),

  setActiveSidebar: (sidebar) =>
    set({ activeSidebar: sidebar }, undefined, "ui/setActiveSidebar"),

  setShowThemeSwitcher: (value) =>
    set({ showThemeSwitcher: value }, undefined, "ui/setShowThemeSwitcher"),

  cycleLoginPageFrameImages: () =>
    set(
      (state) => {
        state.loginPagePhoneFrameIdx = (state.loginPagePhoneFrameIdx + 1) % 4;
      },
      undefined,
      "ui/cycleLoginPageFrameImages"
    ),
});

export default createUiSlice;
