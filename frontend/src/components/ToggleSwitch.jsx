import { cn } from "utils/cn";
import { useState } from "react";

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

export default function ToggleSwitch({ id, theme = "dark", checked = false }) {
  const [isChecked, setIsChecked] = useState(checked);

  const currentTheme = themes[theme];

  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={isChecked}
        className="sr-only"
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <div
        style={{
          background: isChecked ? currentTheme.pillOn : currentTheme.pillOff,
        }}
        className="relative h-6 transition-colors duration-200 rounded-full w-11"
      >
        <div
          style={{
            background: currentTheme.ball,
          }}
          className={cn(
            isChecked ? "translate-x-[22px]" : "translate-x-[2px]",
            "absolute top-1/2 size-5 rounded-full -translate-y-1/2 transform transition-all duration-200"
          )}
        />
      </div>
    </label>
  );
}
