const createAuthSlice = (set) => ({
  auth: {
    isAuthenticated: false,
  },

  setIsAuthenticated: (value) =>
    set((state) => {
      state.auth.isAuthenticated = value;
    }),
});

export default createAuthSlice;
