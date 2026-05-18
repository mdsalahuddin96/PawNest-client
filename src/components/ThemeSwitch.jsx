"use client";

// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-[var(--surface)]
        shadow-lg
        backdrop-blur-xl
      "
    >
      {theme === "dark" ? (
        <BiSun
          size={20}
          className="
            text-yellow-400
            transition-all
            duration-300
          "
        />
      ) : (
        <BiMoon
          size={20}
          className="
            text-[#ff7a59]
            transition-all
            duration-300
          "
        />
      )}
    </button>
  );
}