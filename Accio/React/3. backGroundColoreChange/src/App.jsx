import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  function red() {
    setBgColor("red");
  }

  function green() {
    setBgColor("green");
  }

  function yellow() {
    setBgColor("yellow");
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={red}>Red </button>
      <button onClick={green}>green</button>
      <button onClick={yellow}>yellow</button>
    </div>
  );
}

export default App;
