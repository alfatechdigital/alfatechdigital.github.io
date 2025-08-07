import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Cek preferensi awal
  useEffect(() => {
    const theme = localStorage.theme;
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={toggleTheme}
        className={`p-2 border rounded-xl shadow transition duration-300 ${
          isDark ? "bg-slate-900 text-slate-200" : "bg-slate-200 text-slate-900"
        } cursor-pointer`}
      >
        {isDark ? (
          <MdOutlineDarkMode size={22} />
        ) : (
          <MdOutlineLightMode size={22} />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
