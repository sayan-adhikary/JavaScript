import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  function cngToBlack() {
    setColor("black");
  }
  function cngToRed() {
    setColor("red");
  }
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          minHeight: "200vh",
          color: color === "black" ? "white" : "white",
          padding: "0px",
          margin: "0px"
        }}
      >
        <h1>Change the color</h1>
        <button onClick={cngToBlack}>Black</button>
        <button onClick={cngToRed}>Red</button>
      </div>
    </>
  );
}

export default App;
