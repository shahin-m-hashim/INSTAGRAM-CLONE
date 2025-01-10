const initial = {
  primaryWidget: null,
  activeSidebar: null,
  secondaryWidget: null,
  showThemeSwitcher: false,
  loginPagePhoneFrameIdx: 0,
};

const createUiSlice = (set) => ({
  ...initial,

  resetUiSlice: () => set(initial, undefined, "ui/resetUiSlice"),

  setPrimaryWidget: (widget) =>
    set({ primaryWidget: widget }, undefined, "ui/setPrimaryWidget"),

  togglePrimaryWidget: (widget) =>
    set(
      (state) => ({
        showThemeSwitcher: false,
        primaryWidget: state.primaryWidget === widget ? null : widget,
      }),
      false,
      "ui/togglePrimaryWidget"
    ),

  setSecondaryWidget: (widget) =>
    set({ secondaryWidget: widget }, undefined, "ui/setSecondaryWidget"),

  toggleSecondaryWidget: (widget) =>
    set(
      (state) => ({
        secondaryWidget: state.secondaryWidget === widget ? null : widget,
      }),
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
    set((state) => {
      state.loginPagePhoneFrameIdx = (state.loginPagePhoneFrameIdx + 1) % 4;
    }),
});

export default createUiSlice;
