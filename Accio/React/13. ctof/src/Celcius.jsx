import React from "react";
import "./Celcius.css";

function Celcius({ temp, setTemp, form, setForm }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTemp(form);
  }

  return (
    <div className="celcius-card">
      <h2>🌡 Celsius Converter</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="temp">Enter Temperature (°C)</label>

          <input
            id="temp"
            type="number"
            value={form}
            placeholder="Enter Celsius"
            onChange={(e) => setForm(Number(e.target.value))}
          />
        </div>

        <button type="submit">Convert</button>
      </form>

      <h3>Current Temperature: {temp} °C</h3>
    </div>
  );
}

export default Celcius;