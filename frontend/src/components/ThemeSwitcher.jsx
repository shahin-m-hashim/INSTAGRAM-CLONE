import useStore from "store/_store";
import ToggleSwitch from "components/ToggleSwitch";
import { useShallow } from "zustand/shallow";

export default function ThemeSwitcher() {
  const [theme, toggleTheme] = useStore(
    useShallow((state) => [state.theme, state.toggleTheme])
  );

  return (
    <ToggleSwitch
      ballClassName="size-4"
      pillClassName="h-5 w-10"
      handleChange={toggleTheme}
      isChecked={theme === "dark"}
    />
  );
}
