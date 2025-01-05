import useStore from "store/_store";
import SunIcon from "icons/SunIcon";
import MoonIcon from "icons/MoonIcon";

export default function CurrentThemeImage() {
  const { theme } = useStore();

  return <>{theme === "dark" ? <MoonIcon /> : <SunIcon />}</>;
}
