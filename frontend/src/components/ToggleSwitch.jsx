import { cn } from "utils/cn";

export default function ToggleSwitch({ id, theme = "dark" }) {
  const themes = {
    light: {
      pillOn: "rgb(15,20,25)",
      ball: "rgb(245,245,245)",
      pillOff: "rgb(219,223,228)",
    },
    dark: {
      ball: "rgb(15,20,25)",
      pillOff: "rgb(50,53,57)",
      pillOn: "rgb(245,245,245)",
    },
  };

  const currentTheme = themes[theme];

  const handleChange = (e) => e.target.checked && console.log(e.target.value);

  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        id={id}
        name={id}
        type="checkbox"
        value="sura"
        onChange={handleChange}
        className="sr-only peer"
      />
      <div
        className={cn(
          `after:bg-[${currentTheme.ball}]`, // Default ball color
          `dark:bg-[${currentTheme.pillOff}]`, // Pill color when unchecked
          `peer-checked:bg-[${currentTheme.pillOn}]`, // Pill color when checked
          "relative w-11 h-6 rounded-full duration-300 peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all"
        )}
      ></div>
    </label>
  );
}
