import SunIcon from "icons/SunIcon";
import MoonIcon from "icons/MoonIcon";

const theme = "dark";

export default function ThemeImage() {
  return <>{theme === "dark" ? <MoonIcon /> : <SunIcon />}</>;
}
