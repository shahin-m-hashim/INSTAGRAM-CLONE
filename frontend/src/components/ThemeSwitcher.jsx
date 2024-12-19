import { useEffect, useState } from "react";
import ToggleSwitch from "components/ToggleSwitch";

export default function ThemeSwitcher() {
  const [isChecked, setChecked] = useState(() => {
    const localTheme = localStorage.getItem("theme") || "dark";
    return localTheme === "dark";
  });

  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    const currentTheme = isChecked ? "dark" : "light";
    document.documentElement.classList = "";
    document.documentElement.classList.add(`theme-${currentTheme}`);
    localStorage.setItem("theme", currentTheme);
  }, [isChecked]);

  return (
    <ToggleSwitch
      isChecked={isChecked}
      ballClassName="size-4"
      pillClassName="h-5 w-10"
      handleChange={handleChange}
    />
  );
}
