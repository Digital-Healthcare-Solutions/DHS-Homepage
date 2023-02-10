import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        onClick={() => {
          setTheme("light");
        }}
        className={`bg-gray-200 hover:bg-gray-300 p-2 hover:ring-1 ring-gray-200 text-gray-600 font-bold rounded-lg mx-3  
        `}
      >
        <IoSunny />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className={`bg-gray-200 hover:bg-gray-300 p-2 hover:ring-1 ring-gray-200 text-gray-600 font-bold rounded-lg mr-3  
        `}
      >
        <BsFillMoonStarsFill />
      </button>
    );
  }
};

export default DarkMode;
