const createImagesSlice = (set) => ({
  images: {},
  totalImages: 0,

  initializeImage: (id) =>
    set(
      (state) => {
        if (!(id in state.images)) {
          state.images[id] = { status: "loading" };
          state.totalImages++;
        }
      },
      undefined,
      "images/initializeImage"
    ),

  setImageStatus: (id, status) =>
    set(
      (state) => {
        if (id in state.images) {
          state.images[id].status = status;
        }
      },
      undefined,
      "images/setImageStatus"
    ),
});

export default createImagesSlice;
