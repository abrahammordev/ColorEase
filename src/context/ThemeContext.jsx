import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

//Component that provides the theme context to its children.

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
