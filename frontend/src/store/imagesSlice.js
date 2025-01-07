const createImagesSlice = (set) => ({
  images: [],

  initializeImage: (imgId) =>
    set((state) => {
      if (state.images.some((img) => img.id === imgId)) {
        return state;
      }

      return {
        images: [
          ...state.images,
          {
            id: imgId,
            status: "loading",
          },
        ],
      };
    }),

  setStatus: (imgId, status) =>
    set((state) => ({
      images: state.images.map((img) =>
        img.id === imgId ? { ...img, status } : img
      ),
    })),
});

export default createImagesSlice;
