import React, { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext.js";

function Theme() {
  const { setTheme } = useContext(ThemeContext);
  function changeTheme() {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      }
      return "light";
    });
  }
  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={() => changeTheme()}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Theme;
