const createCarousalsSlice = (set) => ({
  carousals: {},

  initializeCarousal: (id) =>
    set(
      (state) => {
        if (!(id in state.carousals)) {
          state.carousals[id] = {
            activeDot: 0,
            scrollLeft: 0,
            overflowingTo: {
              left: false,
              right: false,
            },
          };
        }
      },
      undefined,
      "initializeCarousal"
    ),

  handleScroll: (id, scrollAmount, scrollLeft, clientWidth, scrollWidth) => {
    set(
      (state) => {
        if (id in state.carousals) {
          state.carousals[id].activeDot = Math.round(scrollLeft / scrollAmount);
          state.carousals[id].scrollLeft = scrollLeft;
          state.carousals[id].overflowingTo.left = scrollLeft > 0;
          state.carousals[id].overflowingTo.right =
            scrollLeft < scrollWidth - clientWidth;
        }
      },
      undefined,
      "handleScroll"
    );
  },

  updateCarousal: (id, clientWidth, scrollWidth) => {
    set(
      (state) => {
        if (id in state.carousals) {
          const { scrollLeft } = state.carousals[id];
          state.carousals[id].overflowingTo.left = scrollLeft > 0;
          state.carousals[id].overflowingTo.right = scrollWidth > clientWidth;
        }
      },
      undefined,
      "updateCarousal"
    );
  },

  removeCarousal: (id) =>
    set((state) => {
      if (id in state.carousals) {
        delete state.carousals[id], undefined, "removeCarousal";
      }
    }),
});

export default createCarousalsSlice;
