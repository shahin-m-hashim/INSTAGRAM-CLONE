const createVideosSlice = (set) => ({
  videos: [],
  totalVideos: 0,

  initializeVideo: (id, isMuted) =>
    set(
      (state) => {
        if (!state.videos.some((video) => video.id === id)) {
          state.videos.push({
            id,
            isMuted,
            hasError: false,
            isPlaying: false,
          });
          state.totalVideos++;
        }
      },
      undefined,
      "videos/initializeVideo"
    ),

  setIsPlaying: (id, isPlaying) =>
    set(
      (state) => {
        const video = state.videos.find((video) => video.id === id);
        if (video) video.isPlaying = isPlaying;
      },
      undefined,
      "videos/setIsPlaying"
    ),

  toggleIsMuted: (id) =>
    set(
      (state) => {
        const video = state.videos.find((video) => video.id === id);
        if (video) video.isMuted = !video.isMuted;
      },
      undefined,
      "videos/toggleIsMuted"
    ),

  handleError: (id) =>
    set(
      (state) => {
        const video = state.videos.find((video) => video.id === id);
        if (video) video.hasError = true;
      },
      undefined,
      "videos/handleError"
    ),
});

export default createVideosSlice;
