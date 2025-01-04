import SunIcon from "icons/SunIcon";
import MoonIcon from "icons/MoonIcon";
import useThemeStore from "store/themeStore";

export default function CurrentThemeImage() {
  const { theme } = useThemeStore();

  return <>{theme === "dark" ? <MoonIcon /> : <SunIcon />}</>;
}
