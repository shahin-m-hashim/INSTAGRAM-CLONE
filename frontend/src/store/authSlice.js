const createAuthSlice = (set) => ({
  isAuthenticated: true,
  login: () => set({ isAuthenticated: true }, undefined, "auth/login"),
  logout: () => set({ isAuthenticated: false }, undefined, "auth/logout"),
});

export default createAuthSlice;
