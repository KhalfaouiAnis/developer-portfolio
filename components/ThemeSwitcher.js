"use client";

import { useTheme } from "next-themes";
import { FaCloudMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed z-50 top-4 left-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center cursor-pointer"
    >
      <span
        className={` w-7 h-7 flex items-center justify-center bg-violet-700 rounded-full transition-all duration-200 ${theme === "dark" ? "ml-5" : "" }`}
      >
        {theme === "light" ? (
          <FaCloudMoon className="text-white scale-up" size={14} />
        ) : (
          <LuSunMoon className="text-white scale-up" size={14} />
        )}
      </span>
    </div>
  );
}
