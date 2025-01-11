const createVideosSlice = (set) => ({
  videos: {},
  totalVideos: 0,

  initializeVideo: (id, isMuted) =>
    set(
      (state) => {
        if (!(id in state.videos)) {
          state.videos[id] = {
            isMuted,
            hasError: false,
            isPlaying: false,
          };
          state.totalVideos++;
        }
      },
      undefined,
      "videos/initializeVideo"
    ),

  setIsVideoPlaying: (id, isPlaying) =>
    set(
      (state) => {
        if (id in state.videos) {
          state.videos[id].isPlaying = isPlaying;
        }
      },
      undefined,
      "videos/setIsVideoPlaying"
    ),

  toggleIsVideoMuted: (id) =>
    set(
      (state) => {
        if (id in state.videos) {
          state.videos[id].isMuted = !state.videos[id].isMuted;
        }
      },
      undefined,
      "videos/toggleIsVideoMuted"
    ),

  handleVideoError: (id) =>
    set(
      (state) => {
        if (id in state.videos) {
          state.videos[id].hasError = true;
        }
      },
      undefined,
      "videos/handleVideoError"
    ),
});

export default createVideosSlice;
