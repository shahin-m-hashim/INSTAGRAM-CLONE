const createVideosSlice = (set) => ({
  videos: [],
  totalVideos: 0,

  initializeVideo: (id, isMuted) =>
    set((state) => {
      if (!state.videos.some((video) => video.id === id)) {
        return {
          videos: [
            ...state.videos,
            {
              id,
              isMuted,
              hasError: false,
              isPlaying: false,
            },
          ],
          totalVideos: state.totalVideos + 1,
        };
      }

      return state;
    }),

  setIsPlaying: (id, isPlaying) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === id ? { ...video, isPlaying } : video
      ),
    })),

  toggleIsMuted: (id) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === id ? { ...video, isMuted: !video.isMuted } : video
      ),
    })),

  handleError: (id) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === id ? { ...video, hasError: true } : video
      ),
    })),
});

export default createVideosSlice;
