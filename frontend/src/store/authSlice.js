const createAuthSlice = (set) => ({
  auth: {
    isAuthenticated:
      JSON.parse(localStorage.getItem("user"))?.isAuthenticated || false,
  },

  setIsAuthenticated: (value) =>
    set(
      (state) => {
        localStorage.setItem(
          "user",
          JSON.stringify({ isAuthenticated: value })
        );

        state.auth.isAuthenticated = value;
      },
      undefined,
      "setIsAuthenticated"
    ),
});

export default createAuthSlice;
