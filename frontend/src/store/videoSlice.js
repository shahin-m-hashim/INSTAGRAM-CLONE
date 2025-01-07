const createVideoSlice = (set) => ({
  videos: [],

  initializeVideo: (videoId, isPlaying = false, isMuted = false) => {
    set((state) => ({
      videos: [
        ...state.videos,
        {
          isMuted,
          isPlaying,
          id: videoId,
          hasError: false,
        },
      ],
    }));
  },

  setVideo: (videoId, updates) => {
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === videoId ? { ...video, ...updates } : video
      ),
    }));
  },

  getVideo: (videoId) => (state) =>
    state.videos.find((video) => video.id === videoId),
});

export default createVideoSlice;
