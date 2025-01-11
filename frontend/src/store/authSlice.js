const createAuthSlice = (set) => ({
  auth: {
    isAuthenticated: true,
  },

  setIsAuthenticated: (value) =>
    set((state) => {
      state.auth.isAuthenticated = value;
    }),
});

export default createAuthSlice;
