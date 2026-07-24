import React from "react";
import "./Ferh.css";

function Ferh({ temp }) {
  const fahrenheit =
    temp === "" ? "--" : ((9 * Number(temp)) / 5 + 32).toFixed(2);

  return (
    <div className="ferh-card">
      <h2>🔥 Fahrenheit</h2>

      <div className="result">
        <p>Converted Temperature</p>

        <h1>{fahrenheit} °F</h1>
      </div>
    </div>
  );
}

export default Ferh;