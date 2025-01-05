const initial = {
  primaryWidget: null,
  activeSidebar: null,
  secondaryWidget: null,
  showThemeSwitcher: false,
};

const createUiSlice = (set) => {
  return {
    ...initial,

    resetUiSlice: () => set(initial),

    setPrimaryWidget: (widget) => set({ primaryWidget: widget }),

    togglePrimaryWidget: (widget) =>
      set((prev) => ({
        showThemeSwitcher: false,
        primaryWidget: prev.primaryWidget === widget ? null : widget,
      })),

    setSecondaryWidget: (widget) => set({ secondaryWidget: widget }),

    toggleSecondaryWidget: (widget) =>
      set((prev) => ({
        secondaryWidget: prev.secondaryWidget === widget ? null : widget,
      })),

    toggleActiveSidebar: (sidebar) =>
      set((prev) => ({
        activeSidebar: prev.activeSidebar === sidebar ? null : sidebar,
      })),

    setActiveSidebar: (sidebar) => set({ activeSidebar: sidebar }),

    setShowThemeSwitcher: (value) => set({ showThemeSwitcher: value }),
  };
};

export default createUiSlice;
