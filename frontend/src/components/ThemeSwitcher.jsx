import useThemeStore from "store/themeStore";
import ToggleSwitch from "components/ToggleSwitch";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <ToggleSwitch
      ballClassName="size-4"
      pillClassName="h-5 w-10"
      handleChange={toggleTheme}
      isChecked={theme === "dark"}
    />
  );
}
