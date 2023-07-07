"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="flex items-center"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
      }}
    >
      <FiMoon
        className={` w-6 h-6 transition-all  ${
          theme === "light" ? "block" : "hidden"
        }`}
      />
      <FiSun
        className={`w-6 h-6 fill-bloack transition-all  
          ${theme === "dark" ? "block" : "hidden"}
        )`}
      />
    </button>
  );
}
