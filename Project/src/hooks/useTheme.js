import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
