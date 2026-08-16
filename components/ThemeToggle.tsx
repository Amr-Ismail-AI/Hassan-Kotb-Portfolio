"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      return;
    }

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document.documentElement.classList.toggle(
      "dark",
      prefersDark
    );

    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    document.documentElement.classList.toggle(
      "dark",
      nextTheme
    );

    localStorage.setItem(
      "theme",
      nextTheme ? "dark" : "light"
    );

    setIsDark(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border-line bg-bg-secondary/40 text-text-primary shadow-sm shadow-text-primary/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue hover:text-blue hover:shadow-lg hover:shadow-blue/20"
    >
      {isDark ? <FiSun size={19} /> : <FiMoon size={19} />}
    </button>
  );
};

export default ThemeToggle;