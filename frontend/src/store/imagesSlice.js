const createImagesSlice = (set) => ({
  images: [],
  totalImages: 0,

  initializeImage: (id) =>
    set((state) => {
      if (!state.images.some((img) => img.id === id)) {
        return {
          images: [
            ...state.images,
            {
              id,
              status: "loading",
            },
          ],
          totalImages: state.totalImages + 1,
        };
      }

      return state;
    }),

  setStatus: (id, status) =>
    set((state) => ({
      images: state.images.map((img) =>
        img.id === id ? { ...img, status } : img
      ),
    })),
});

export default createImagesSlice;
