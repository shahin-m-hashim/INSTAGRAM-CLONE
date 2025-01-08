const createImagesSlice = (set) => ({
  images: [],
  totalImages: 0,

  initializeImage: (id) =>
    set(
      (state) => {
        if (!state.images.some((img) => img.id === id)) {
          state.images.push({
            id,
            status: "loading",
          });
          state.totalImages++;
        }
      },
      undefined,
      "images/initializeImage"
    ),

  setStatus: (id, status) =>
    set(
      (state) => {
        const image = state.images.find((img) => img.id === id);
        if (image) image.status = status;
      },
      undefined,
      "images/setStatus"
    ),
});

export default createImagesSlice;
