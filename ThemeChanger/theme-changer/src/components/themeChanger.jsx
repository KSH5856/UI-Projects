import { useState } from "react";
import "./themeChanger.css";

export const ThemeChanger = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-container" data-theme={`${theme}`}>
      <div>Hello</div>
      <div>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    </div>
  );
};
