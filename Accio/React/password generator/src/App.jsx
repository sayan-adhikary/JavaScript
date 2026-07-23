import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let characters = "";

    if (uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers) {
      characters += "0123456789";
    }

    if (symbols) {
      characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    // If no option is selected
    if (characters === "") {
      alert("Please select at least one character type.");
      return;
    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>

      {/* Password Display */}
      <div className="password-box">
        <input
          type="text"
          value={password}
          placeholder="Generated Password"
          readOnly
        />
        <button
          onClick={() => {
            if (!password) return;

            navigator.clipboard.writeText(password);
            alert("Password copied!");
          }}
        >
          Copy
        </button>
      </div>

      {/* Password Length */}
      <div className="length-section">
        <label>Password Length: {length}</label>

        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      {/* Options */}
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Lowercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Symbols
        </label>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={generatePassword}>Generate Password</button>
        <button  onClick={() => {
    setPassword("");
    setLength(12);
    setUppercase(true);
    setLowercase(true);
    setNumbers(true);
    setSymbols(false);
  }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
