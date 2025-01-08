const createThemeSlice = (set, get) => {
  const theme = localStorage.getItem("theme") || "dark";
  document.documentElement.classList.add(`theme-${theme}`);

  const toggleTheme = () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.replace(
      `theme-${currentTheme}`,
      `theme-${newTheme}`
    );

    set({ theme: newTheme }, undefined, "theme/toggleTheme");
  };

  return {
    theme,
    toggleTheme,
  };
};

export default createThemeSlice;
