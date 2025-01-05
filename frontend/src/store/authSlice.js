const createAuthSlice = (set) => ({
  isAuthenticated: true,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
});

export default createAuthSlice;
