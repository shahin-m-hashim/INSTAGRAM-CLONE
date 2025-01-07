const createVideosSlice = (set) => ({
  videos: [],

  initializeVideo: (videoId, isMuted) =>
    set((state) => {
      if (state.videos.some((video) => video.id === videoId)) {
        return state;
      }

      return {
        videos: [
          ...state.videos,
          {
            id: videoId,
            hasError: false,
            isPlaying: false,
            isMuted,
          },
        ],
      };
    }),

  setIsPlaying: (videoId, isPlaying) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId ? { ...video, isPlaying } : video
      ),
    })),

  toggleIsMuted: (videoId) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId ? { ...video, isMuted: !video.isMuted } : video
      ),
    })),

  handleError: (videoId) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId ? { ...video, hasError: true } : video
      ),
    })),
});

export default createVideosSlice;
