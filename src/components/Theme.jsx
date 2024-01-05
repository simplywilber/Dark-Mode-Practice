"use client";

import { useEffect, useState } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  const preference = window.matchMedia("(perfers-color-scheme: dark)").matches;

  // This will grab the current them from the user on mount
  useEffect(() => {
    const theme = localStorage.getItem("selectedTheme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  //local storage of course :)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("selectedTheme", "light");
    }
  }, [darkMode]);

  

  return (
    // I used the bang or logical not operator in order to flip the boolean for darkMode
    // Implemented a ternary operator as well in order to conditionally render the sun and moon
    <div
      className="cursor-pointer text-8xl"
      onClick={() => setDarkMode(!darkMode)}
    >
      {" "}
      {darkMode ? (
        <i className="fa-regular fa-sun text-white"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </div>
  );
}
